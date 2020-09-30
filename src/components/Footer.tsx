import React from "react";

type FooterProps = {
  copyright: string;
  status: boolean;
};

const Footer = ({ copyright, status }: FooterProps) => (
  <footer className={status ? "full" : ""}>
    <span className="font-weight-ligth">{copyright}</span>
  </footer>
);

export default Footer;
