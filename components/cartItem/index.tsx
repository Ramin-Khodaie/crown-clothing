import { ICategory } from "../../data/shopData"

const CartItem = ({item}:{item:ICategory}) =>{
    return(
        <div className="cart-item">
            <img src={item.imageUrl} alt={item.name}/>
            <div className="item-detail">
                <span className="name">{item.name}</span>
                <span>
                    {item.quantity} x {item.price}
                </span>
            </div>
        </div>
    )
}

export default CartItem