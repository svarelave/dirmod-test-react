import React from "react";

interface ButtonProps {
  submitted?: boolean;
  title?: string;
  disabled?: boolean;
  className?: string | undefined;
  outline?: string;
  clear?: boolean;
  type?: "button" | "submit";
  submit?: boolean;
  color?: string;
  small?: boolean;
  shadow?: string;
  block?: boolean;
  style?: any;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  submitted = false,
  title,
  disabled,
  className,
  outline,
  clear,
  type,
  color,
  small,
  shadow,
  block,
  style,
  children,
  onClick,
}) => {
  return (
    <button
      title={title}
      disabled={disabled}
      className={`btn ${className ? className : ""} ${
        outline ? `btn-outline-${outline}` : ""
      } ${clear ? "btn-clear" : ""} ${color ? "btn-" + color : ""} ${
        small ? "btn-small" : ""
      } ${block ? "btn-block" : ""} ${shadow ? shadow : ""}`}
      onClick={onClick}
      type={type}
      style={style}
    >
      {submitted ? (
        <div className="spinner-border text-orange" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
