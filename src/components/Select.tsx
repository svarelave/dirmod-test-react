import React from "react";
import { useTranslation } from "react-i18next";
import { Options } from "models";

interface SelectProps {
  required?: boolean;
  label?: string | undefined;
  name?: string;
  color?: string | "";
  placeholder?: string | "";
  className?: string;
  maxlength?: number;
  options: Options[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  valueSelect?: any;
  defaulText?: string;
  icon?: any;
}

const Select: React.FC<SelectProps> = ({
  required = false,
  label,
  name,
  color,
  options,
  className,
  onChange,
  valueSelect,
  defaulText = "Selecteer",
  icon,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`form-group ${required && "is-required"}`}>
      {label && (
        <label htmlFor={name}>
          {t(`formLabel.${label}`)} {icon}
        </label>
      )}
      <select
        name={name}
        value={valueSelect}
        onChange={onChange}
        className={`form-control ${color ? color : ""} ${
          className ? className : ""
        }`}
      >
        <option value="">{defaulText}</option>
        {options.map(({ value, label, translation }) => {
          return (
            <option key={value} value={value}>
              {translation ? t(`select.${label}`) : label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
