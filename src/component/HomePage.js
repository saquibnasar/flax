import React from "react";
import logo from "../assets/images/footerImage_dark.svg";
import trustpilot from "../assets/images/trustpilot.svg";
import Group from "../assets/images/Group 8938.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function HomePage() {
  return (
    <>
      <section className="main-container">
        <div className="homePage">
          <div className="container text-center">
            <img className="mt-4" src={logo} alt="" />
            <div className="homePage_form-container mt-5">
              <h1>
                Join Flax community of top people getting online web presence
                from around the world
              </h1>
              <h2>start building your hub 👇</h2>
              <form>
                <div class="mt-5 instagram_input">
                  {/* <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="@ your instagram handle"
                  /> */}

                  <div class="did-floating-label-content input-group">
                    <span class="input-group-prepend">
                      <div class="input-group-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                      </div>
                    </span>
                    <span class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </span>
                    <input
                      class="did-floating-input"
                      type="text"
                      placeholder=" "
                    />
                    <label class="did-floating-label">
                      your instagram handle
                    </label>
                  </div>
                  {/* <FontAwesomeIcon icon={faInstagram} /> */}
                </div>
                <div class="mt-4 email_input">
                  <div class="did-floating-label-content input-group">
                    <input
                      class="did-floating-input"
                      type="text"
                      placeholder=" "
                    />
                    <label class="did-floating-label">
                      add an email we can contact
                    </label>
                  </div>
                  {/* <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="add an email we can contact"
                  /> */}
                  <div id="emailHelp" class="form-text">
                    email is private and used to verify new users
                  </div>
                </div>
                <div class="form-floating mt-4">
                  <div class="did-floating-label-content">
                    <select
                      class="did-floating-select"
                      onclick="this.setAttribute('value', this.value);"
                      onchange="this.setAttribute('value', this.value);"
                    >
                      <option value>creator</option>
                      <option value="1">Alabama</option>
                      <option value="2">Boston</option>
                      <option value="3">Ohaio</option>
                      <option value="4">New York</option>
                      <option value="5">Washington</option>
                    </select>
                    <label class="did-floating-label">user type</label>
                  </div>
                  {/* <label for="floatingSelect">Works with selects</label> */}
                </div>
                <div class="form-check form-switch">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <h4 class="form-check-label" for="flexSwitchCheckDefault">
                    i want to receive exclusive updates and content from{" "}
                    <span>Flax.ai</span>
                  </h4>
                </div>
                <h3 className="mt-3">
                  working with an agency or group of talent?{" "}
                  <br className="d-sm-500-none" /> email us at
                  <a href="/"> support@flax.ai</a>
                </h3>
                <button type="submit" class="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
            </div>
            <img className="img-fluid mt-4" src={trustpilot} alt="" />

            <a className="d-flex justify-content-center mt-4" href="/">
              <img className="img-fluid" src={Group} alt="" />
            </a>
            <p className="mt-4">
              © <span> Flax.ai,</span> 2023 –{" "}
              <span className="text-underline"> All Right Reserve</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
