import React from "react";
import { default as NumberFormat } from "react-number-format";

const InputFormat = (props: any) => (
  <div className="form-group">
    {props.label && <label htmlFor={props.name}>{props.label}</label>}
    <NumberFormat
      {...props}
      className={`form-control ${
        props.color ? "input-" + props.color : "input-white"
      }`}
      name={props.name}
      disabled={props.disabled ? props.disabled : false}
    />
  </div>
);

export default InputFormat;
