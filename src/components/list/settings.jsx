"use client";

import { useEffect, useState } from "react";
import ActionIcon from "../UI/actionIcon";

export default function Settings({ setSettings }) {
  const [hideCompleted, setHideCompleted] = useState(true);

  const toggleHC = () => {
    setHideCompleted((prev) => {
      setSettings({ hideCompleted: !prev });
      return !prev;
    });
  };

  useEffect(() => {
    setSettings({ hideCompleted });
  }, []);

  return (
    <div>
      <button
        className="border p-1 rounded-md hover:shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)] dark:hover:shadow-[0px_0px_2px_2px_rgba(255,255,255,0.25)] flex"
        onClick={toggleHC}
      >
        show completed
        <ActionIcon className="text-7xl">
          {hideCompleted ? "toggle_off" : "toggle_on"}
        </ActionIcon>
      </button>
    </div>
  );
}
