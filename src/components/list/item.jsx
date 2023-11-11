"use client";

import { useState } from "react";

export default function ListItem({ item }) {
  const [currentItem, setCurrentItem] = useState(item);

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
    <div className="flex flex-row">
      <div>
        <i onClick={checkAction} className="symbol cursor-pointer select-none">
          {currentItem.completed ? "check_box" : "check_box_outline_blank"}
        </i>
      </div>
      <div className={contentClasses[currentItem.completed]}>
        {currentItem.content}
      </div>
    </div>
  );
}