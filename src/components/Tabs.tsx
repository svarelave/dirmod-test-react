import React from "react";

interface TabsItem {
  value: number;
  label: string;
}

interface TabsProps {
  onChange: (i: number) => void;
  selected: number;
  items: TabsItem[];
}

const Tabs = (props: TabsProps) => (
  <div className="container-tabs">
    {props.items.map((i: TabsItem, index: number) => (
      <div
        key={index}
        onClick={() => props.onChange(i.value)}
        className={`tab-item ${
          props.selected === i.value ? "tab-selected" : ""
        }`}
      >
        {i.label}
      </div>
    ))}
  </div>
);

export default Tabs;
