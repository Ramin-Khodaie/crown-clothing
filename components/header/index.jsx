import Link from "next/link";
import HeaderIcon from "../icons/HeaderIcon";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BsCartPlus, BsCart2 } from "react-icons/bs";
import {
  MdOutlineNotifications,
  MdFavoriteBorder,
  MdLogin,
  MdLogout,
} from "react-icons/md";
import { useState } from "react";
import CartDropDown from "../cartdropdown";
import Entrance from "../entrance";
import Search from "../search";
const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const [dropdown, setDropDown] = useState(false);
  const [cart, setCart] = useState(false);
  return (
    <header className="container">     
      <div className="header">
        <div className="logo--container">
          <Link href="/">
            <HeaderIcon className="header--logo" />
          </Link>
        </div>
        <Search/>
        <div className="header__options">
          <Link href="/shop">
            <a className={pathname === "/shop" ? "active" : ""}>Shop</a>
          </Link>
          <Link href="/contact">
            <a className={pathname === "/contact" ? "active" : ""}>Contact</a>
          </Link>
          {/* <Link href="/signin">
          <a className={pathname === "/signin" ? "active" : ""}>Signin</a>
        </Link> */}
        </div>
        <div className="header__icons">
          <BiUser
            className="header-icon"
            onClick={() => setDropDown(!dropdown)}
            // onMouseEnter={() => setDropDown(true)}
            // onMouseLeave={() => setDropDown(false)}
          />

          {/* <MdOutlineNotifications className="header-icon" /> */}
          <MdFavoriteBorder className="header-icon" />
          <BsCartPlus className="header-icon" onClick={() => setCart(!cart)} />
        </div>
        <FaBars className="bars" />
        {dropdown && (
          <CartDropDown>
            <Entrance />
          </CartDropDown>
        )}
        {/* {cart && (
        <CartDropDown
          component={<div>this is ganna be cart component</div>}
          styles="cart"
        />
      )} */}
      </div>
    </header>
  );
};

export default Header;
