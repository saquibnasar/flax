import React from "react";
import pageNotFound from "../assets/images/pageNotFound.png";
import Footer from "./Footer";
import appStore from "../assets/images/appStore.svg";
import playStore from "../assets/images/playstore.svg";
// import footer from "../assets/images/footerImage.svg";
export default function PageNotFound() {
  return (
    <>
      <div className="main-container">
        <section className="pnf">
          <div className="text-center">
            <h1>The page you’re looking for doesn’t exist.</h1>
            <h2>
              This web URL could be your’s. Claim now for free. by download{" "}
              <a target="blank" href="https://caard.in">
                Flax App
              </a>
            </h2>
            <img className="img-fluid mt-3" src={pageNotFound} alt="" />
            <div className="pnf_link">
              <a href="https://apps.apple.com/in/app/caard-digital-business-card/id1626948504">
                <img className="img-fluid mt-3" src={appStore} alt="" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.caard.caard_frontend_final">
                <img className="img-fluid mt-3" src={playStore} alt="" />
              </a>
            </div>
            <Footer />
          </div>
        </section>
        {/* <section className="pnf">
          <a href="/">Download Flax app</a>
          <div className="container">
            <img src={headerLogo} alt="" />

            <h1>The page you’re looking for doesn’t exist.</h1>
            <h2>
              If you're looking for a specific page, double check the spelling.
            </h2>
            <h3>
              This web URL could be your’s. Claim now for free. by download Flax
              App
            </h3>
            <div className="">
              <img src={appStore} alt="" /> <img src={playStore} alt="" />
            </div>
            <img src={footer} alt="" />
            <p>
              © <span>Flax.Ai</span>, 2023 – <span>All Right Reserve</span>
            </p>
          </div>
        </section> */}
      </div>
    </>
  );
}
