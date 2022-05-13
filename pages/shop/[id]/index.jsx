import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CollectionItem from "../../../components/collectionItem";
import CollectionData from "../../../data/shopData";

const ShopId = () => {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState(undefined);

  useEffect(() => {
    const categoryData = CollectionData.filter(
      (data) => data.id === parseInt(id)
    );
    setCategory(categoryData[0]);
  }, []);

  if (category) {
    const { title, items } = category;

    return (
      <div className="category container">
        <h1 className="title">{title}</h1>
        <div className="items">
          {items &&
            items.map((item, idx) => (
              <CollectionItem collItem={item} key={idx} />
            ))}
        </div>
      </div>
    );
  } else {
    return <div>there is no data</div>;
  }
};

export default ShopId;
