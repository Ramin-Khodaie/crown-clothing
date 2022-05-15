import Link from "next/link";
import CollectionItem from "../collectionItem";
import {IShop} from '../../data/shopData'

const Collection = ({ item }:{item:IShop}) => {
  const { title, id, items } = item;
  
  return (
    <div className="collectionPreview">
      <Link href={`/shop/${id}`}>
        <a className="title">{title}</a>
      </Link>
      <div className="preview">
        {items
          .filter((item, idx:number) => idx < 4)
          .map((item, idx:number) => (
            <CollectionItem collItem={item} key={idx} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
