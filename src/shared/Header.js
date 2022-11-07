import { Button, Navbar, Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo/logo.png";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUser()
      .then((result) => {
        toast.success("User logged Out Successfully");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <Navbar rounded={true}>
      <Navbar.Brand>
        <img
          src={logo}
          className="mr-3 h-9 lg:h-12 rounded-full"
          alt="CRUD Logo"
        />
        <span className="self-center whitespace-nowrap text-md lg:text-xl font-semibold dark:text-white">
          ROZA'S FLAVOR FUSION
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Tooltip content={user?.displayName ? user.displayName : "Mr X"}>
          {user?.photoURL ? (
            <img src={user?.photoURL} alt="" className="w-10 rounded-full" />
          ) : (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
              alt=""
              className="w-10 rounded-full"
            />
          )}
        </Tooltip>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/" className="text-xl">
          <Button color="gray">Home</Button>
        </Link>
        <Link to="/blog" className="text-xl">
          <Button color="gray">Blog</Button>
        </Link>
        {user ? (
          <>
            <Link className="text-xl">
              <Button color="gray">Add Services</Button>
            </Link>
            <Link className="text-xl">
              <Button color="gray">My Reviews</Button>
            </Link>
            <Link>
              <Button color="gray" onClick={handleLogOut}>
                Logout
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link className="text-xl" to="/login">
              <Button color="gray">Login</Button>
            </Link>
            <Link to="/register">
              <Button color="gray">Register</Button>
            </Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
