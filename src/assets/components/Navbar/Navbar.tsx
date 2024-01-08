import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className="sticky -top-0 flex items-center justify-between bg-slate-400 p-4">
        <div>
          <Link to="/">Logo</Link>
        </div>

        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
