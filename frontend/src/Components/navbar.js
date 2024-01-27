import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../images/cc.png'
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../UserContext";

export default function Navigation() {
  const {emailId,_} = useContext(UserContext);
  //console.log(emailId);
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    // Perform login logic if needed
    // ...

    // Redirect to the mainindex page
    navigate('/');
  };
  const handleuserPofile=()=>{
    navigate('/profile');
  };
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Vaccination Center</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">User</span>
            <span className="block truncate text-sm font-medium">{emailId}</span>
          </Dropdown.Header>
          <Dropdown.Item onClick={handleuserPofile}>Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogoutClick}>Log out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/mainindex" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#footer">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
