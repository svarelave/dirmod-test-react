import React from "react";

interface InputProps {
  required?: boolean;
  labelClass?: string | undefined;
  label?: string | undefined;
  name?: string;
  type?: "text" | "number" | "password" | "email";
  color?: string | "";
  placeholder?: string | "";
  maxlength?: number;
  value?: string | number | "";
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const InputTable: React.FC<InputProps> = ({
  required = false,
  labelClass,
  label,
  name,
  type = "text",
  color,
  placeholder,
  value,
  maxlength,
  onChange,
  className,
  disabled = false,
}) => {
  return (
    // <div className="form-table">
    <div className={`form-table-row ${required && "is-required"}`}>
      {label && (
        <label
          className={`${
            labelClass ? labelClass : ""
          } form-table-cell form-table-label`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="form-table-cell">
        <input
          maxLength={maxlength}
          placeholder={placeholder}
          type={type}
          className={`${color ? `input-${color}` : "input-white"} ${
            className ? className : ""
          }`}
          name={name}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
      </div>
    </div>
    // </div>
  );
};

export default InputTable;
