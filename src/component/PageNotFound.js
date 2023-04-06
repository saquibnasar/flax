import React from "react";
import Footer from "./Footer";
import appStore from "../assets/images/appStore.svg";
import playStore from "../assets/images/playstore.svg";
import pageNotFound from "../assets/images/pageNotFound.png";

export default function PageNotFound() {
  return (
    <>
      <div className="pnf">
        <div className="main-container">
          <section className="pnf_section">
            <div className="text-center">
              <h1>The page you’re looking for doesn’t exist.</h1>
              <h2>
                This web URL could be your’s. Claim now for free. by download{" "}
                <a href="https://caard.in">Flax App</a>
              </h2>
              <img src={pageNotFound} alt="" className="img-fluid mt-3" />
              <div className="pnf_link">
                <a
                  href="https://apps.apple.com/in/app/caard-digital-business-card/id1626948504"
                  target="blank"
                >
                  <img className="img-fluid mt-3" src={appStore} alt="" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.caard.caard_frontend_final"
                  target="blank"
                >
                  <img className="img-fluid mt-3" src={playStore} alt="" />
                </a>
              </div>
              <Footer />
            </div>
          </section>
        </div>
      </div>

      {/* <div className="pnf">
        <div className="main-container">
          <section className="pnf_section">
            <div className="text-center">
              <div
                className="d-flex flex-direction-column justify-content-center"
                style={{
                  height: "80vh",
                  paddingInline: "0.5rem",
                }}
              >
                <h1>
                  <span className="pnf_animationTest_first">
                    EVERYWHERE YOU ARE
                  </span>
                  <div className="pnf_animationTest_sec">
                    <span>IN ONE SIMPLE LINK{""}</span>
                  </div>
                </h1>

                <h2>
                  Say Goodbye To Coding And Hello To Creativity With Flax.Ai
                </h2>
                <div className="pnf_link">
                  <a
                    href="https://apps.apple.com/in/app/caard-digital-business-card/id1626948504"
                    target="blank"
                  >
                    <img className="img-fluid mt-3" src={appStore} alt="" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.caard.caard_frontend_final"
                    target="blank"
                  >
                    <img className="img-fluid mt-3" src={playStore} alt="" />
                  </a>
                </div>
              </div>
              <div className="pnf_footer">
                <Footer />
              </div>
            </div>
          </section>
        </div>
      </div> */}
    </>
  );
}
