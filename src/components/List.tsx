import React from "react";

const Container = (props: any) => (
  <ul className="list-group list-group-flush">{props.children}</ul>
);

const Item = (props: any) => (
  <li {...props} className="list-group-item">
    {props.avatar}
    {props.icon && <img src={props.icon} className="icon-list" alt="Imagen" />}
    {props.label && <span className="strong-item-list">{props.label}: </span>}
    <span style={props.valueStyle}>{props.children}</span>
  </li>
);

export default {
  Container,
  Item,
};
