import React from "react";

export const TitleModal = (props: any) => {
  return (
    <h2 className="text-center font-bold mb-4 text-dark" {...props}>
      {props.children}
    </h2>
  );
};
