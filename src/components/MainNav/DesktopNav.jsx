import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

function DesktopNav(props) {
  const { menus } = props;

  return (
    <nav className="desktop-nav">
      <div className="desktop-nav__container">
        {menus.map((menu, index) => {
          return (
            <div key={index} className="desktop-nav__link-section">
              <a
                href={menu.href}
                className={`desktop-nav__link desktop-nav__main-link ${
                  index === menus.length - 1
                    ? "desktop-nav__main-link--reset"
                    : ""
                }`}
              >
                {menu.text}
              </a>
              {menu.subMenus && (
                <div className="desktop-nav__sub-menu-container">
                  <div className="desktop-nav__go-to">
                    Go To {menu.text} <a href={menu.href}>{">"}</a>
                  </div>
                  <div className="desktop-nav__sub-menu">
                    {menu.subMenus.map((subMenu, index) => {
                      return (
                        <div key={index} className="desktop-nav__seperator">
                          <a href={subMenu.href} className="desktop-nav__link">
                            {subMenu.text}
                          </a>
                          <div className="desktop-nav__nested-sub-menu">
                            {subMenu.subMenus &&
                              subMenu.subMenus.map((subMenu, index) => {
                                return (
                                  <div key={index}>
                                    <IoMdArrowDropright />
                                    <a
                                      key={index}
                                      href={subMenu.href}
                                      className="desktop-nav__link"
                                    >
                                      {subMenu.text}
                                    </a>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default DesktopNav;
