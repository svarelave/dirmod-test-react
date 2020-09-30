import React from "react";

interface CardProps {
  children?: React.ReactNode;
}

const CardTitle: React.FC<CardProps> = ({ children }) => {
  return <h2 className="card-title-component">{children}</h2>;
};

export default CardTitle;
