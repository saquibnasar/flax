import React from "react";
import { RWebShare } from "react-web-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import Slider from "../../Links/Slider";
import { Link } from "react-router-dom";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
export default function EssenceLayout(props) {
  let navigate = useNavigate();
  const d = new Date();
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = d.getDate();
  let month = monthArray[d.getMonth()];
  let year = d.getFullYear();

  return (
    <>
      <div className="main-container theme-essence">
        <section className="primary_container">
          <div className="essenceLayout">
            <div className="container">
              <h1>{props.data.Name}</h1>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  {props.data.ImageLocation ? (
                    <img
                      className="img-fluid"
                      src={props.data.ImageLocation}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  <div>
                    <h2>{props.data.Name}</h2>
                    <p>
                      {day} {month} {year}
                    </p>
                  </div>
                </div>
                <RWebShare
                  data={{
                    url: props.url,
                  }}
                >
                  <button className="share">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  </button>
                </RWebShare>
              </div>
              <div className="">
                <Slider
                  data={props.modeData}
                  theme={props.theme}
                  EssenceLayout={true}
                />
              </div>
              <button className="BackBUtton" onClick={() => navigate(-1)}>
                Back
              </button>

              {/* <Link to={props.url}>Back</Link> */}

              <Footer theme={props.theme} userName={props.data.Name} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
