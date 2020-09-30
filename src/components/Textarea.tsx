import React from "react";

const Textarea = (props: any) => (
  <div className="form-group">
    {props.label && <label htmlFor={props.name}>{props.label}</label>}
    <textarea
      {...props}
      rows={props.rows ? props.rows : 4}
      type={props.type ? props.type : "text"}
      className="form-control"
      name={props.name}
    ></textarea>
  </div>
);

export default Textarea;
