import React from "react";
import logoDark from "../assets/images/footerImage_dark.svg";
import logo from "../assets/images/footerImage_light.svg";
export default function Footer(props) {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <>
      {props.theme === "essence" ? (
        <footer className="footer">
          <div className="contaier">
            <div className="">
              <h3>
                © {props.userName}, {year} – All Right Reserve
              </h3>
              <h5>
                Essence Theme Powered by{" "}
                <a href="https://www.flaxapp.co/" target="blank">
                  Flax.ai
                </a>
              </h5>
            </div>
          </div>
        </footer>
      ) : (
        <footer
          className={
            props.mode === "direct"
              ? "footer text-center footer_bottom z-1 p-relative"
              : `${
                  props.linkType === undefined
                    ? "PageNotFound_footer footer text-center z-1 p-relative"
                    : "footer text-center z-1 p-relative"
                }`
          }
        >
          <div className="contaier">
            <div className="">
              <a
                href="https://www.flaxapp.co/"
                // className="caardClub"
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.theme === "buwayne" ||
                props.theme === "neotronic" ||
                props.theme === "consmy" ? (
                  <img className="img-fluid" src={logoDark} alt="" />
                ) : (
                  <img className="img-fluid" src={logo} alt="" />
                )}
              </a>
              {props.linkType === undefined ? (
                <p className="mt-2 text-center">
                  © <span>Flax.ai</span>, {year} –
                  <span> All Right Reserve</span>
                </p>
              ) : (
                <p className="mt-2 text-center">
                  © <span>{props.userName}</span>, {year} –
                  <span> All Right Reserve</span>
                </p>
              )}
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
