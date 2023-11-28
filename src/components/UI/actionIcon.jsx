"use client";

export default function ActionIcon(props) {
  const applyClasses = (styleClasses) => {
    if (styleClasses) {
      return styleClasses
        .split(" ")
        .map((c) => `[&>i]:${c}`)
        .join(" ");
    } else return "";
  };

  return (
    <span className={applyClasses(props.className)}>
      <i className="symbol cursor-pointer select-none" onClick={props.onClick}>
        {props.children}
      </i>
    </span>
  );
}
