import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const Header = () => {
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
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to= '/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link>Add Services</Link>
        <Link>My Reviews</Link>
        <Link>Login</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
