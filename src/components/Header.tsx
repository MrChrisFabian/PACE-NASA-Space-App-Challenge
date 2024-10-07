import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex py-4 px-8 justify-between items-center">
      <Link to="/" className="flex items-center gap-x-2">
        <img src="./arandu-pace-icon.png" alt="" className="size-7" />
        <img src="./arandu-logo.webp" alt="Arandu logo" className="h-7" />
      </Link>
    </header>
  );
};

export default Header;
