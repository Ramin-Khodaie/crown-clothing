import CustomButton from "../custombutton";
import {AddToCart} from '../../utils/cartItemUtils';

const CollectionItem = ({ collItem }) => {
  const { imageUrl, name, price } = collItem;
  
  const addItemtoCart = () => {
    let items = []
    items = AddToCart(items, collItem)
    console.log(878, items)
  };
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
      <CustomButton onClick={addItemtoCart}> Add to Cart</CustomButton>
    </div>
  );
};
export default CollectionItem;
