import Link from "next/link";
import CollectionItem from "../collectionItem";

const Collection = ({ item }) => {
  const { title, id, items } = item;
  
  return (
    <div className="collectionPreview">
      <Link href={`/shop/${id}`}>
        <a className="title">{title}</a>
      </Link>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item, idx) => (
            <CollectionItem collItem={item} key={idx} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
