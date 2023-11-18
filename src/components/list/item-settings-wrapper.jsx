"use client";

import { useState } from "react";
import ListItem from "./item";
import Settings from "./settings";

export default function Wrapper({ list, id }) {
  const [currentSettings, setCurrentSettings] = useState();
  const [currentList, setCurrentList] = useState(list);

  const setSettings = (settings) => {
    setCurrentSettings(settings);
  };

  return (
    <div>
      <Settings setSettings={setSettings} />
      {currentList?.map((item) => {
        return (
          <ListItem
            item={item}
            currentList={currentList}
            setCurrentList={setCurrentList}
            hideCompleted={currentSettings?.hideCompleted}
          />
        );
      })}
    </div>
  );
}
