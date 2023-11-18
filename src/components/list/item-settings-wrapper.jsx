"use client";

import { useReducer, useState } from "react";
import ListItem from "./item";
import Settings from "./settings";

export default function Wrapper({ list, id }) {
  const [currentSettings, setCurrentSettings] = useState();
  const [ currentList, dispatch] = useReducer(listReducer, list)

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
            dispatch={dispatch}
            hideCompleted={currentSettings?.hideCompleted}
          />
        );
      })}
    </div>
  );
}

const listReducer = (list, action) => {
  switch(action.type) {
    case 'update':{
      const newList = list.map((oldItem)=> {
        if(oldItem.id == action.id){
          return {
            ...oldItem,
            ...action.newProps
          }
        } else return oldItem;
      })
      .sort((a, b) => a.completed - b.completed || a.sort_order - b.sort_order);
      return newList;
    }
  }
}