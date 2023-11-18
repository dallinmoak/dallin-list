"use client";

import ActionIcon from "../UI/actionIcon";
import Input from "../UI/input";
import { useState } from "react";

export default function ListItem({
  item,
  dispatch,
  hideCompleted,
}) {
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
    const data = await updateItem({
      completed: !item.completed,
    });
    if (data) {
      dispatch({
        type: "update",
        id: data.id,
        newProps: {completed: data.completed},
      });
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
      dispatch({
        type: 'update',
        id: data.id,
        newProps: {content: data.content}
      })
    }
  };

  const handleCancel = () => setEditing(false);

  const contentClasses = {
    true: "line-through",
    false: "",
  };

  return (
    <div className={item.completed && hideCompleted ? "hidden" : ""}>
      <div className="flex flex-row mb-1">
        <ActionIcon onClick={handleCheck}>
          {item.completed ? "check_box" : "check_box_outline_blank"}
        </ActionIcon>
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
          <>
            <div className={contentClasses[item.completed]}>{item.content}</div>
            <ActionIcon onClick={handleEdit}>edit</ActionIcon>
          </>
        )}
      </div>
    </div>
  );
}
