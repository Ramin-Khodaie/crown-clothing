import { useRouter } from "next/router";
import { IDirectory } from "../../data/landingData";
const DirectoryItem = ({ item }: { item: IDirectory }) => {
  const router = useRouter();
  const { imageUrl, size, title } = item;
  return (
    <div
      className={`${size} directory-item`}
      onClick={() => router.push("/shop")}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default DirectoryItem;
