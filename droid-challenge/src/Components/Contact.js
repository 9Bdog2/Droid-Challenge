import { Component } from "react";
import { BiArchiveOut } from "react-icons/bi";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 about_col justify-content-center">
            <div className="about_content">
              <h1
                className="my-2 col-md-12 col-sm-12 col-lg-12 col-xl-12"
                style={{ fontSize: "100px" }}
              >
                <BiArchiveOut />
              </h1>
              <h1
                className="my-3 col-md-12 col-sm-12 col-lg-12 col-xl-12 "
                style={{ fontWeight: "bold" }}
              >
                Contact
              </h1>
              <p className="my-2 mb-3 px-5 about_text col-md-12 col-sm-12 col-lg-12 col-xl-12">
                droid@droid.com
              </p>
              <p className="my-2  px-5 about_text col-md-12 col-sm-12 col-lg-12 col-xl-12">
                tel.123 - 456 - 789
              </p>
              <p className="my-2 mb-3 px-5 about_text col-md-12 col-sm-12 col-lg-12 col-xl-12">
                tel.887 - 236 - 324
              </p>
              <p className="my-2  px-5 about_text col-md-12 col-sm-12 col-lg-12 col-xl-12">
                Cluj, Cluj-Napoca
              </p>
              <p className="my-2 px-5 about_text col-md-12 col-sm-12 col-lg-12 col-xl-12">
                Romania
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
