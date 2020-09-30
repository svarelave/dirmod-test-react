import React from "react";
import { Link } from "react-router-dom";

interface PageTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  backUrl?: string;
}

export default function PageTitle({
  children,
  className,
  backUrl,
}: PageTitleProps) {
  return (
    <div className={`page-title ${className ? className : ""} text-uppercase`}>
      {backUrl && (
        <Link to={backUrl}>
          <span>↩ </span>
        </Link>
      )}
      {children}
    </div>
  );
}
