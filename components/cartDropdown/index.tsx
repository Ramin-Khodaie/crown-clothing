import { useAppSelector } from "../../redux/hooks";
import CartItem from "../cartItem";
import CustomButton from "../custombutton";

const CartDropDown = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  return (
    
    <div className="cart">

      <div className="cartitem-container">
      {cartItems.length ? (
        cartItems.map((itm, idx)=><CartItem key={idx} item={itm}/>)
      ) : (
        <span className="empty-cart">there is no item in cart.</span>
      )}
     {
         cartItems.length ? <CustomButton>Go to cart</CustomButton> : <></>
     } 
      </div>
    
    </div>
  );
};

export default CartDropDown;
