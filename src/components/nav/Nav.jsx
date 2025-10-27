import React, { useState } from "react";
import style from "./Nav.module.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={style.Nav}>
      <div className={style.NavSticky}>
        <div className={style.NavContainer}>
          <div className={style.NavLogo}>
            <img
              src="https://www.golestan.com/wp-content/uploads/2023/01/logo-fr.png"
              alt="golestan-tea-logo"
            />
          </div>

          <button className={style.Hamburger} onClick={toggleMenu}>
            {/* Conditional classes are now applied to the Bars */}
            <span className={`${style.Bar} ${menuOpen ? style.BarTopOpen : ''}`}></span>
            <span className={`${style.Bar} ${menuOpen ? style.BarMiddleOpen : ''}`}></span>
            <span className={`${style.Bar} ${menuOpen ? style.BarBottomOpen : ''}`}></span>
          </button>

          <div className={`${style.NavOption} ${menuOpen ? style.menuOpen : ''}`}>
            <ul>
              <li>صفحه اصلی</li>
              <li>شرکت گلستان</li>
              <li>محصولات</li>
              <li>وبلاگ</li>
              <li>قرعه کشی</li>
              <li>استخدام</li>
              <li>تماس با ما</li>
              <li>EN</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;