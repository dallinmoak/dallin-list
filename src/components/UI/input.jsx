"use client";

import { useRef } from "react";
import { useEffect } from "react";

export default function Input(props) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  },[]);

  const editValue = (e) => {
    props.editValue(e.target.value);
  }
  return (
    <input
      className="bg-slate-100 dark:bg-slate-900"
      type={props.type}
      required={props.required}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      ref={inputRef}
      value={props.value}
      onChange={editValue}
    />
  );
}
