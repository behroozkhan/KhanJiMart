import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import NavRight from "./NavRight";
import { Button } from "@mui/material";
import PersistentDrawerLeft from "./Drawyer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/redux-features/auth/AuthSlice";

const navbarItems = [
  {
    id: "1",
    items: [
      { name: "Home", id: "home" },
      { name: "Contact", id: "contact" },
      { name: "About", id: "about" },
      // { name: "Sign Up", id: "register  " },
    ],
  },
];

const Navbar = () => {
  // const dispatch = useDispatch();
  // const { userData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);

  const handleLogout =  () => {
    try {
      dispatch(logout());
      console.log("Logout successful!");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <nav className="flex items-center justify-between sm:justify-between md:justify-evenly border-b-2">
      <div className="block lg:hidden xl:hidden md:hidden">
        <PersistentDrawerLeft />
      </div>
      <div>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>

      <div className="hidden md:hidden lg:flex xl:flex">
        <div className="">
          {navbarItems.map((items) => (
            <ul key={items.id} className="flex gap-2 ml-8">
              {items.items.map((link) => (
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
              ))}

              {userData ? (
                <li>
                  <Link to="/login">
                    <Button
                      className="text-[1.200rem]"
                      style={{ color: "var(--mainTextBlack)" }}
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="register">
                    <Button
                      className="text-[1.200rem]"
                      style={{ color: "var(--mainTextBlack)" }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          ))}
        </div>
      </div>
      <NavRight />
    </nav>
  );
};

export default Navbar;
