import React from "react";

interface CheckboxProps {
  inline?: boolean;
  value: number | string;
  label: string;
  onChange?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ inline, value, label }) => (
  <div className={`form-check form-group ${inline ? "form-check-inline" : ""}`}>
    <input
      className="form-check-input"
      type="checkbox"
      id={`checkbox${value}`}
    />
    <label className="form-check-label" htmlFor={`checkbox${value}`}>
      {label}
    </label>
  </div>
);

export default Checkbox;
