import Link from "next/link";

const Entrance = () => {
  return (
    <div className="user-modal">
      <div className="user-modal-title">Hello 👋</div>
      <div className="user-modal-desc">
        Sign in for a more personalized experience & fast checkout.
      </div>
      <Link href="./signin">
        <a>Sign in</a>
      </Link>
      <Link href="./signup">
        <a>Join us</a>
      </Link>
    </div>
  );
};

export default Entrance;
