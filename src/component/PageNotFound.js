import React from "react";
import pageNotFound from "../assets/images/15151445_5559852.jpg";
import Footer from "./Footer";
import appStore from "../assets/images/appStore.svg";
import playStore from "../assets/images/playstore.svg";
// import footer from "../assets/images/footerImage.svg";

export default function PageNotFound() {
  // const textLoader = () => {
  //   const pnf_animationTest_sec = document.querySelector(
  //     ".pnf_animationTest_sec"
  //   );
  //   console.log(pnf_animationTest_sec);
  //   if (pnf_animationTest_sec) {
  //     setTimeout(() => {
  //       pnf_animationTest_sec.textContent = "IN ONE";
  //     }, 0);
  //     setTimeout(() => {
  //       pnf_animationTest_sec.textContent = "";
  //     }, 4000);
  //   }
  // };
  // textLoader();
  // setInterval(() => textLoader(), 8000);
  return (
    <>
      <div className="pnf">
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
                  {/* <a target="blank" href="https://caard.in">
                  Flax App
                </a> */}
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
                {/* <img className="img-fluid mt-3" src={pageNotFound} alt="" /> */}
              </div>
              <div className="pnf_footer">
                <Footer />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
