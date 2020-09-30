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
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
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
  onKeyPress,
  className,
  disabled = false,
}) => {
  return (
    <div className={`form-group ${required && "is-required"}`}>
      {label && (
        <label className={`${labelClass ? labelClass : ""}`} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        maxLength={maxlength}
        placeholder={placeholder}
        type={type}
        className={`form-control ${color ? `input-${color}` : "input-white"} ${
          className ? className : ""
        }`}
        name={name}
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;

// const Input	= (props: any) => (
// 	<div className="form-group">
// 		{ props.label && <label htmlFor={ props.name }>{ props.label }</label> }
// 		<input
// 			{ ...props }
// 			type={ props.type ? props.type : 'text' }
// 			className={ `form-control ${ props.color ? 'input-'+props.color : 'input-white' }` }
// 			name={ props.name } />
// 	</div>
// )
