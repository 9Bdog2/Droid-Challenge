import { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

class Home extends Component {
  render() {
    return (
      <div className="main_menu">
        <Navbar>
          <Navbar.Brand className="mr-auto">
            <Link to="/">Logo</Link>
          </Navbar.Brand>
          <Nav defaultActiveKey="/home" as="ul" className="bg-white">
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
        </Navbar>
      </div>
    );
  }
}

export default Home;
