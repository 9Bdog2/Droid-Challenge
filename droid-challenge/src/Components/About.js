import { Component } from "react";
import { BiArchiveOut } from "react-icons/bi";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 about_col justify-content-center">
            <div className="about_content">
              <h1
                className="my-5 col-md-12 col-sm-12 col-lg-12 col-xl-12"
                style={{ fontSize: "100px" }}
              >
                <BiArchiveOut />
              </h1>
              <h1
                className="my-3 col-md-12 col-sm-12 col-lg-12 col-xl-12 "
                style={{ fontWeight: "bold" }}
              >
                About Us
              </h1>
              <p className="my-2 mb-5 px-5 about_text col-md-12 col-sm-12 col-lg-12 col-xl-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tempor congue, nisi nisi efficitur
                nisi, eget efficitur nisl nisi eget nisl. Pellentesque euismod,
                urna eu tempor congue, nisi nisi efficitur nisi, eget efficitur
                nisl nisi eget nisl.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
