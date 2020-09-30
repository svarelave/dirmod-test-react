import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "components";
import { useTranslation } from "react-i18next";

type SidebarProps = {
  status: string;
  menu: any[];
  pathname: string;
  onCloseSidebar: (event: any) => void;
  onPressLogout: () => void;
};

const getClassName = (pathname: string, item: any): string => {
  // console.log(item);
  if (!!item.submodules && item.submodules.length > 0) {
    if (pathname === item.path) {
      return "active-module";
    }

    if (pathname.indexOf(item.path) !== -1) {
      return "active-module";
    }
    return "";
  }

  if (pathname === item.path) {
    return "active";
  }

  if (pathname.indexOf(item.path) !== -1) {
    return "active";
  }

  return "";
};

export const Sidebar = ({
  status,
  menu,
  pathname,
  onCloseSidebar,
}: SidebarProps) => {
  const { t } = useTranslation();

  return (
    <div id="left" className={status}>
      <div
        className="icon mt-2 ml-2 d-flex align-items-center justify-content-center d-none d-md-block d-lg-block"
        onClick={onCloseSidebar}
      >
        <Icon name={`angle-double-${status === "open" ? "left" : "right "}`} />
      </div>
      <aside className={`sidebar ${status}`}>
        <div className="container-menu">
          <div className="menu">
            <ul className="">
              {menu.map((item, key) => {
                return (
                  <li key={key} className={getClassName(pathname, item)}>
                    {!item.submodules || item.submodules.length === 0 ? (
                      <Link to={item.path}>
                        <img
                          src={require("../assets/icons/" + item.name + ".svg")}
                          width="20"
                        />
                        <span className="ml-2">{t(item.tranlation_key || item.display_name)}</span>
                      </Link>
                    ) : (
                      <Submenu {...item} />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>

      <div role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <div id="m-back">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul id="menu">
            <aside className={`sidebar ${status}`}>
              <div className="container-menu">
                <div className="menu">
                  <ul className="">
                    {menu.map((item, key) => {
                      return (
                        <li key={key} className={getClassName(pathname, item)}>
                          {!!item.submodules && item.submodules.length === 0 ? (
                            <Link to={item.path}>
                              <img
                                src={require("../assets/icons/" +
                                  item.name +
                                  ".svg")}
                                width="20"
                              />
                              <span className="ml-2">
                                {t(item.tranlation_key)}
                              </span>
                            </Link>
                          ) : (
                            <Submenu {...item} />
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </aside>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Submenu = React.memo(
  ({
    display_name,
    submodules,
  }: {
    display_name: string;
    submodules: any[];
  }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
      <React.Fragment>
        <div className="label-submodule" onClick={() => setIsActive(!isActive)}>
          {display_name}
          <Icon name={`${isActive ? "angle-up" : "angle-down"}`} />
        </div>
        <div className={`${isActive ? "" : "d-none"} ml-3`}>
          {!!submodules &&
            submodules.map((sub: any, k: number) => {
              return (
                <div key={k}>
                  <Link to={sub.name}>{sub.display_name}</Link>
                </div>
              );
            })}
        </div>
      </React.Fragment>
    );
  }
);
