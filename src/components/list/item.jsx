"use client";

import ActionIcon from "../UI/actionIcon";
import Input from "../UI/input";
import { useState } from "react";

export default function ListItem({ item, hideCompleted }) {
  const [currentItem, setCurrentItem] = useState(item);
  const [editContent, setEditContent] = useState();
  const [editing, setEditing] = useState(false);

  const handleCheck = async () => {
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify({
        ...currentItem,
        completed: !currentItem.completed,
      }),
    };
    const fetchUrl = `/api/update-item`;
    const res = await fetch(fetchUrl, fetchOptions);
    const data = await res.json();
    if (data) {
      setCurrentItem((prev) => {
        return { ...prev, completed: !prev.completed };
      });
    }
  };

  const handleEdit = () => {
    setEditing(true);
    setEditContent(currentItem.content);
  };

  const handleSave = () => {
    setEditing(false);

    setCurrentItem((prev) => {
      return { ...prev, content: editContent };
    });
    console.log("saved");
  };

  const handleCancel = () => setEditing(false);

  const contentClasses = {
    true: "line-through",
    false: "",
  };

  return (
    <div className={currentItem.completed && hideCompleted ? "hidden" : ""}>
      <div className="flex flex-row mb-1">
        <ActionIcon onClick={handleCheck}>
          {currentItem.completed ? "check_box" : "check_box_outline_blank"}
        </ActionIcon>
        {editing ? (
          <>
            <Input
              type="text"
              id={`edit_item_${currentItem.id}`}
              value={editContent}
              editValue={(val) => setEditContent(val)}
            />
            <ActionIcon onClick={handleSave}>save</ActionIcon>
            <ActionIcon onClick={handleCancel}>cancel</ActionIcon>
          </>
        ) : (
          <>
            <div className={contentClasses[currentItem.completed]}>
              {currentItem.content}
            </div>
            <ActionIcon onClick={handleEdit}>edit</ActionIcon>
          </>
        )}
      </div>
    </div>
  );
}
