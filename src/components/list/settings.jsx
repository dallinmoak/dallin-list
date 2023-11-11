"use client";

import { useEffect, useState } from "react";

export default function Settings({setSettings}) {
  const [hideCompleted, setHideCompleted] = useState(true);

  const toggleHC = () => {
    setHideCompleted(prev => {
      setSettings({hideCompleted: !prev});
      return !prev;
    })
  }

  useEffect(()=> {
    setSettings({hideCompleted})
  },[])

  return (
    <div>
      <button onClick={toggleHC}>{hideCompleted ? "show completed" : "hide completed"}</button>
    </div>
  );
}
