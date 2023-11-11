"use client";

import { useState } from "react";

export default function ListItem({ item, hideCompleted }) {
  const [currentItem, setCurrentItem] = useState(item);
  const [editing, setEditing] = useState(false);

  const checkAction = async () => {
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
  const contentClasses = {
    true: "line-through",
    false: "",
  };

  return (
    <div className={currentItem.completed && hideCompleted ? "hidden" : ""}>
      <div className="flex flex-row">
        <i onClick={checkAction} className="symbol cursor-pointer select-none">
          {currentItem.completed ? "check_box" : "check_box_outline_blank"}
        </i>
        {editing ? (
          <input type="text" />
        ) : (
          <div className={contentClasses[currentItem.completed]}>
            {currentItem.content}
          </div>
        )}
        <i
          className="symbol cursor-pointer select-none"
          onClick={() => setEditing((prev) => !prev)}
        >
          {editing ? "save" : "edit"}
        </i>
      </div>
    </div>
  );
}
