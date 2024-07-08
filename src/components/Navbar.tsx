import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../sass/components/_navbar.scss";
import  {ComboContent, EventContent, MenuExpand, ServiceContent } from "./MenuContent";

type MenuItem = "menu" | "event" | "service" | "promo" | null;

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastKnownItem = useRef<MenuItem | null>(null);
  const [submenuContent, setSubmenuContent] = useState<React.ReactNode | null>(null);
  const [menuLeft, setMenuLeft] = useState<number | null>(null);

  const handleMouseEnter: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    const item = event.currentTarget.getAttribute('data-item') as MenuItem;
    lastKnownItem.current = item;

    setActiveMenuItem(item);

    switch (item) {
      case "menu":
        setSubmenuContent(<MenuExpand title='Menu' />);
        break;
      case "event":
        setSubmenuContent(<EventContent title="Eventos" />);
        break;
      case "service":
        setSubmenuContent(<ServiceContent title="Servicios" />);
        break;
      case "promo":
        setSubmenuContent(<ComboContent title="Combos" />);
        break;
    }

    const linkRect = event.currentTarget.getBoundingClientRect();
    const menuLeft = linkRect.left + linkRect.width / 2;
    setMenuPosition(menuLeft);
    setIsMenuOpen(true);
  };

  const setMenuPosition = (left: number) => {
    const minLeft = 0;
    const maxLeft = window.innerWidth - 350;
    const adjustedLeft = Math.min(maxLeft, Math.max(minLeft, left - 80));
    setMenuLeft(adjustedLeft);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleMenuMouseEnter: React.MouseEventHandler<HTMLDivElement> = () => {
    if (lastKnownItem.current !== null) {
      setActiveMenuItem(lastKnownItem.current);
      setIsMenuOpen(true);
    }
  };

  const handleMenuMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="container-nav">
        <div className="nav">
          <div className="logo">

          </div>
          <div className="items">
            <Link
              className="link-items"
              to="menu"
              data-item='menu'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Todos los articulos
            </Link>
            <Link
              className="link-items"
              to="pizzas"
            >
              Cotiza tus articulos
            </Link>
            <Link
              className="link-items"
              to=""
            >
              Servicios
            </Link>
          </div>
        </div>
        <div className="profile-items">
          <Link className="link link-sign-up" to="">
            <span>Crear cuenta</span>
          </Link>
          <Link className="link link-sign-in" to="signin">
            <span>Ingresa</span>
          </Link>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="hit-box"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <div
            className={`dropdown-menu ${activeMenuItem}`}
            style={{ left: `${menuLeft}px` }}
          >
            {submenuContent}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
