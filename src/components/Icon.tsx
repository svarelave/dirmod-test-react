import React from "react";

const Icon = (props: any) => (
  <i className={`fa fa-${props.name} ${props.color}`} {...props}></i>
);

export default Icon;
