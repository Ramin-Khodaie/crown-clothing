import CustomButton from "../custombutton";
import { AddToCart } from "../../utils/cartItemUtils";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import {AddCartItems} from '../../redux/reducers/cartReducers';
const CollectionItem = ({ collItem }) => {
  const { imageUrl, name, price } = collItem;
  
  const dispatch = useDispatch()

  const addItemtoCart = () => {
      dispatch(AddCartItems(collItem))
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
