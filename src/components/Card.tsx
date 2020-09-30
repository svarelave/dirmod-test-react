import React from "react";

type StyleMap = any;
interface CardProps {
  className?: string;
  style?: StyleMap;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, style, children }) => {
  return (
    <div className={`card ${className}`} style={{ ...style }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
