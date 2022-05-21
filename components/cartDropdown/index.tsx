import { useAppSelector } from "../../redux/hooks";
import CartItem from "../cartItem";
import CustomButton from "../custombutton";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../redux/hooks";
import { ToggleCartItems } from "../../redux/reducers/cartReducers";

const CartDropDown = () => {
  const { cartItems } = useAppSelector((state) => state.cart);

  const dispacth = useAppDispatch();
  const router = useRouter();
  return (
    <div className="cart">
      <div className="cartitem-container">
        {cartItems.length ? (
          cartItems.map((itm, idx) => <CartItem key={idx} item={itm} />)
        ) : (
          <span className="empty-cart">there is no item in cart.</span>
        )}
        {cartItems.length ? (
          <CustomButton
            handleClick={() => {
              router.push("/checkout");
              dispacth(ToggleCartItems());
            }}
          >
            Go to cart
          </CustomButton>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CartDropDown;
