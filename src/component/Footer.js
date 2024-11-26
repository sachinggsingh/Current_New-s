import React, { Component } from "react";


export class Footer extends Component {
  render() {
    return (
      <footer className="custom-footer text-center">
        <div className="container p-4">
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-outline btn-floating m-1 social"
              href="https://www.facebook.com"
              role="button"
            >
              <i className="fab fa-facebook-f fa-dark fa-lg " ></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn btn-outline btn-floating m-1 social"
              href="https://www.twitter.com"
              role="button"
            >
              <i className="fab fa-twitter fa-dark fa-lg "></i>
            </a>
            {/* <!-- Instagram --> */}
            <a
              className="btn btn-outline btn-floating m-1 social"
              href="https://www.instagram.com"
              role="button"
            >
              <i className="fab fa-instagram fa-dark fa-lg "></i>
            </a>

            {/* <!-- LinkedIn --> */}
            <a
              className="btn btn-outline btn-floating m-1 social"
              href="https://www.linkedin.com/in/sachin-g-singh/"
              role="button"
            >
              <i className="fab fa-linkedin-in fa-dark fa-lg "></i>
            </a>

            {/* <!-- GitHub --> */}
            <a
              className="btn btn-outline btn-floating m-1 social"
              href="https://github.com/sachinggsingh"
              role="button"
            >
              <i className="fab fa-github fa-dark fa-lg "></i>
            </a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  {/* <!-- Email input --> */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="form5Example24"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example24">
                      Email address
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    data-mdb-ripple-init
                    type="submit"
                    className="btn btn-danger mb-4"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
          <section className="mb-4">
            <p>
              Current New's is an app that declares itself as a "News" app in
              the Google Play and IOS App Store and is in the “News and
              Magazine” category on the Google Play store and IOS App Store.
              News apps that aggregate content from different publishing
              sources must be transparent about the publishing source of the
              content in the app and each of the sources must meet News policy
              requirements.
            </p>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <p className="text-reset fw-bold">© 2024 Copyright: Current New's</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
