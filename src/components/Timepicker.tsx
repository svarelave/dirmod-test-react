import React from "react";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import DatePicker from "react-datepicker";
import { CustomProps } from "models";

import timeSvg from "assets/icons/time.svg";

import es from "date-fns/locale/es";

registerLocale("es", es);
setDefaultLocale("es");

interface TimeProps {
  required?: boolean;
  label?: string;
  color?: string | "";
  value?: Date;
  timeIntervals: number;
  minTime?: Date;
  maxTime?: Date;
  className?: string;
  onChange(
    date: Date | null,
    event: React.SyntheticEvent<any> | undefined
  ): void;
}

const CustomInput = React.forwardRef<HTMLDivElement, CustomProps>(
  ({ color, value, className, onClick }, ref) => (
    <div
      ref={ref}
      className={`container-datepicker ${className ? className : ""} ${
        color ? color : ""
      }`}
      onClick={onClick}
    >
      <img src={timeSvg} alt="Time icon" width="30" height="30" />
      <p>{value}</p>
    </div>
  )
);

const _TimePicker: React.FC<TimeProps> = ({
  label,
  required = false,
  color,
  minTime,
  maxTime,
  timeIntervals,
  onChange,
  className,
  value
}) => (
  <div className="form-group">
    {label && (
      <label className="label-datepicker">
        {label} {required ? <span className="text-danger">(*)</span> : ""}
      </label>
    )}
    <DatePicker
      selected={value}
      onChange={onChange}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={timeIntervals}
      timeCaption="Hora"
      dateFormat="h:mm aa"
      timeFormat="hh:mm a"
      minTime={minTime}
      maxTime={maxTime}
      excludeTimes={[new Date()]}
      customInput={
        <CustomInput value={value} color={color} className={className} />
      }
    />
  </div>
);

export default _TimePicker;
