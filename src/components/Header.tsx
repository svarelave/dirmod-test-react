import React from "react";
import { imagotipo } from "assets/img";
import logout from "assets/icons/logout.svg";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

type HeaderProps = {
  username: string;
  logo?: string;
  onPressLogout: () => void;
};

export const Header = ({ username, logo, onPressLogout }: HeaderProps) => {
  return (
    <Navbar bg="white" expand="lg" className="header shadow-sm">
      <Navbar.Brand href="#home">
        <img
          src={logo ? `${imagotipo}?${Date.now()}` : imagotipo}
          width="150"
          height="55"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end align-items-center px-2">
        <p className="mb-0 mr-4 text-white">{username}</p>
        <Link
          to="/"
          onClick={(event: any) => {
            event.preventDefault();
            onPressLogout();
          }}
        >
          <img src={logout} alt="logout" width="25" />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export const HeaderQueue = ({ area }: { area: string }) => {
  return (
    <Navbar bg="white" expand="lg" className="header shadow-drl">
      <Navbar.Text className="drl-title text-orange">{area}</Navbar.Text>
      <Navbar.Collapse className="py-3 justify-content-end">
        <Navbar.Brand href="#home">
          <img
            src={imagotipo}
            width="225"
            height="75"
            alt="Logo"
            className="float-right mr-5"
          />
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};
