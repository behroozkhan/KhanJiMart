import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavRight from "./NavRight";
import { Button } from "@mui/material";
import PersistentDrawerLeft from "./Drawyer";


const navbarItems = [
  {
    items: [
      { name: "Home", id: "home" },
      { name: "Contact", id: "contact" },
      { name: "About", id: "about" },
      { name: "Sign Up", id: "sign up" },
    ],
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between sm:justify-between md:justify-evenly border-b-2">
     <div className="block lg:hidden xl:hidden md:hidden">
        <PersistentDrawerLeft/>
      </div>
      <div >
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>

      <div className="hidden md:hidden lg:flex xl:flex">
        {navbarItems.map((items) => (
          <ul className="flex gap-2 ml-8">
            {items.items.map((link) => (
              <>
                <li key={link.id}>
                  <Link to={link.id}>
                    <Button
                      className="text-[1.200rem]"
                      style={{ color: "var(--mainTextBlack)" }}
                    >
                      {link.name}
                    </Button>
                  </Link>
                </li>
              </>
            ))}
          </ul>
        ))}
      </div>
      <NavRight />
    </nav>
  );
};

export default Navbar;
