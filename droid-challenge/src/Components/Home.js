import { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

class Home extends Component {
  render() {
    return (
      <div className="main_menu">
        <Nav defaultActiveKey="/home" as="ul" className="bg-white ">
          <Nav.Item className="mr-auto ">
            <Nav.Link href="/" className="main_menu_logo">
              Logo
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/">
              <div className="nav-link ">Home</div>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about">
              <div className="nav-link">About</div>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact">
              <div className="nav-link">Contact</div>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/">
              <div className="nav-link search">
                <BsSearch />
              </div>
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Home;
