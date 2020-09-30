import React from "react";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import DatePicker from "react-datepicker";
import { CustomProps } from "models";
import Icon from "./Icon";

import es from "date-fns/locale/es";

registerLocale("es", es);
setDefaultLocale("es");

const CustomInput = React.forwardRef<HTMLDivElement, CustomProps>(
  ({ color, value, text, onClick }, ref) => (
    <div
      ref={ref}
      className={`container-datepicker ${color ? color : ""}`}
      onClick={onClick}
    >
      <p>{value ? value : text ? text : ""}</p>
      {!value && <p>{text}</p>}
      <Icon name="calendar" />
    </div>
  )
);

interface DateProps {
  required?: boolean;
  label?: string;
  color?: string | "";
  value?: Date;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  text?: string;
  onChange(
    date: Date | null,
    event: React.SyntheticEvent<any> | undefined
  ): void;
}

const _DatePicker: React.FC<DateProps> = ({
  label,
  required = false,
  color,
  minDate,
  maxDate,
  value,
  disabled = false,
  text,
  onChange,
}) => (
  <div className="form-group">
    {label && (
      <label className="label-datepicker">
        {label} {required ? <span className="text-danger">(*)</span> : ""}
      </label>
    )}
    <DatePicker
      popperPlacement="botom-start"
      minDate={minDate}
      maxDate={maxDate}
      selected={value}
      onChange={onChange}
      customInput={<CustomInput value={value} color={color} text={text} />}
      disabled={disabled}
    />
  </div>
);

export default _DatePicker;
