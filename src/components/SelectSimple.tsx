import React from "react";

export type Options = {
  value: string | number;
  label: string;
};
interface SelectProps {
  required?: boolean;
  label?: string | undefined;
  name?: string;
  color?: string | "";
  placeholder?: string | "";
  maxlength?: number;
  options: Options[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  valueSelect?: any;
  defaulText?: string;
}

const Select: React.FC<SelectProps> = ({
  required = false,
  label,
  name,
  color,
  options,
  onChange,
  valueSelect,
  defaulText = "Selecteer",
}) => {
  return (
    <select
      name={name}
      value={valueSelect}
      onChange={onChange}
      className={`${color ? color : ""}`}
    >
      {/* <option value="">{defaulText}</option> */}
      {options.map(({ value, label }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
