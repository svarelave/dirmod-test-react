import React from "react";
import { Link } from "react-router-dom";
import backSvg from "assets/icons/back.svg";
import arrowRightSvg from "assets/icons/arrow-right.svg";

type NavLinkProps = {
  name: string;
  isActive?: boolean | undefined;
  to: string | object;
};

const NavLink = ({ name, isActive, to }: NavLinkProps) => (
  <li
    key={name}
    className={`breadcrumb-custom-item ${isActive ? "active" : ""}`}
  >
    <Link to={to} className="text-dark">
      {name}
    </Link>
    {!isActive && <img src={arrowRightSvg} alt="arrow" />}
  </li>
);

type BradcrumbProps = {
  links: NavLinkProps[];
};

export const Breadcrumb = ({ links }: BradcrumbProps) => {
  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb-custom">
        <li className="mr-2">
          <Link to={links[0].to}>
            <img src={backSvg} width="20" height="20" alt="back" />
          </Link>
        </li>
        {links.map(NavLink)}
      </ul>
    </nav>
  );
};
