import React from "react";
import { Avatar, Carousel, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from '../src/assets/logo/logo.png'

const Home = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <img
            src={logo}
            className="mr-3 h-9 lg:h-12 rounded-full"
            alt="CRUD Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
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
            <Dropdown.Header>
              <span className="block text-sm">John</span>
              <span className="block truncate text-sm font-medium">
                john.doe@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link>Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={true}>Home</Navbar.Link>
          <Navbar.Link>About</Navbar.Link>
          <Navbar.Link>Services</Navbar.Link>
          <Navbar.Link>Pricing</Navbar.Link>
          <Navbar.Link>Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Home;
