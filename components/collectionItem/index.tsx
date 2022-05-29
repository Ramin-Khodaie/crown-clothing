import CustomButton from "../custombutton";
import { ICategory } from "../../data/shopData";
import { useAppDispatch} from '../../redux/hooks'
import { AddCartItems } from "../../redux/reducers/cartReducers";

const CollectionItem = ({ collItem }: { collItem: ICategory }) => {
  const { imageUrl, name, price } = collItem;

  const dispatch = useAppDispatch();

  const addItemtoCart = () => {
    dispatch(AddCartItems(collItem));
  };

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
      <CustomButton handleClick={addItemtoCart}> Add to Cart</CustomButton>
    </div>
  );
};
export default CollectionItem;
