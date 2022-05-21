import Link from "next/link";
import HeaderIcon from "../icons/HeaderIcon";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BsCartPlus, BsCart2, BsCart } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import DropDown from "../dropdown";
import Entrance from "../entrance";
import Search from "../search";
import { ToggleCartItems } from "../../redux/reducers/cartReducers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CartDropDown from "../cartDropdown";
const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const [dropdown, setDropDown] = useState(false);
  const dispacth = useAppDispatch();
  const { hidden, cartItems } = useAppSelector((state) => state.cart);

  const toggleCartItem = () => {
    dispacth(ToggleCartItems());
  };
  return (
    <header>
      <div className="header">
        <div className="logo--container">
          <Link href="/">
            <HeaderIcon className="header--logo" />
          </Link>
        </div>
        <Search />
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
          <BsCart
            className="header-icon"
            onClick={() => toggleCartItem()}
          ></BsCart>
          <span
            style={{
              position: "absolute",
              top: "23px",
              right: "25px",
              fontSize: "18px",
              fontWeight:600
            }}
          >
            {cartItems.length}
          </span>
        </div>
        <FaBars className="bars" />
        {dropdown && (
          <DropDown>
            <Entrance />
          </DropDown>
        )}
        {!hidden && (
          <DropDown>
            <CartDropDown />
          </DropDown>
        )}
      </div>
    </header>
  );
};

export default Header;
