"use client";

import { useState } from "react";
import ListItem from "./item";
import Settings from "./settings";

export default function Wrapper({ list }) {
  const [currentSettings, setCurrentSettings] = useState();

  const setSettings = (settings) => {
    setCurrentSettings(settings);
    // console.log(settings);
  };

  return (
    <div>
      <Settings setSettings={setSettings} />
      {list.map((item) => {
        return <ListItem item={item} hideCompleted={currentSettings?.hideCompleted} />;
      })}
    </div>
  );
}
