"use client";

import ActionIcon from "../UI/actionIcon";
import Input from "../UI/input";
import { useState } from "react";

export default function ListItem({ item, dispatchList, hideCompleted }) {
  const [editContent, setEditContent] = useState();
  const [editing, setEditing] = useState(false);

  const updateItem = async (newProps) => {
    const options = {
      method: "POST",
      body: JSON.stringify({ ...item, ...newProps }),
    };
    const url = "/api/update-item";
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  };

  const handleCheck = async () => {
    if (!editing) {
      const data = await updateItem({
        completed: !item.completed,
      });
      if (data) {
        dispatchList({
          type: "update",
          id: data.id,
          newProps: { completed: data.completed },
        });
      }
    }
  };

  const handleEdit = () => {
    setEditing(true);
    setEditContent(item.content);
  };

  const handleSave = async () => {
    const data = await updateItem({ content: editContent });
    if (data) {
      setEditing(false);
      dispatchList({
        type: "update",
        id: data.id,
        newProps: { content: data.content },
      });
    }
  };

  const handleCancel = () => setEditing(false);

  const contentClasses = {
    true: "w-full line-through",
    false: "w-full ",
  };

  const itemClasses = (completed, hideCompleted) => {
    if (completed && hideCompleted) {
      return "animate-[slide-fade-out_0.5s_ease-out_forwards]";
    } else {
      return "";
    }
  };

  return (
    <div className={item.completed && hideCompleted ? "" : ""}>
      <div className="flex flex-row mb-1 w-full">
        {editing ? (
          <>
            <Input
              type="text"
              id={`edit_item_${item.id}`}
              value={editContent}
              editValue={(val) => setEditContent(val)}
            />
            <ActionIcon onClick={handleSave}>save</ActionIcon>
            <ActionIcon onClick={handleCancel}>cancel</ActionIcon>
          </>
        ) : (
          <span className="[&>div]:flex">
            <div className={itemClasses(item.completed, hideCompleted)}>
              <ActionIcon onClick={handleCheck}>
                {item.completed ? "check_box" : "check_box_outline_blank"}
              </ActionIcon>
              <div className={contentClasses[item.completed]}>
                {item.content}
              </div>
              <ActionIcon onClick={handleEdit}>edit</ActionIcon>
            </div>
          </span>
        )}
      </div>
    </div>
  );
}
