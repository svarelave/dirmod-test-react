import React from "react";

interface PropsCard
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
}

const CardCustom = ({ className, ...rest }: PropsCard) => {
  return (
    <div
      className={`card-custom ${className ? className : ""}`}
      {...rest}
    ></div>
  );
};

const CardCustomHeader = ({ className, ...rest }: PropsCard) => {
  return (
    <div
      className={`card-custom-header bg-orange ${className ? className : ""}`}
      {...rest}
    ></div>
  );
};

const CardCustomTitle = ({ className, ...rest }: PropsCard) => {
  return (
    <div
      className={`card-custom-title font-heavy ${className ? className : ""}`}
      {...rest}
    ></div>
  );
};

const CardCustomBody = ({ className, ...rest }: PropsCard) => {
  return <div className={` ${className ? className : ""}`} {...rest}></div>;
};

const CardCustomFooter = ({ className, ...rest }: PropsCard) => {
  return (
    <div
      className={`card-custom-footer py-3 px-3 ${className ? className : ""}`}
      {...rest}
    ></div>
  );
};

CardCustom.Header = CardCustomHeader;
CardCustom.Title = CardCustomTitle;
CardCustom.Body = CardCustomBody;
CardCustom.Footer = CardCustomFooter;

export { CardCustom };
