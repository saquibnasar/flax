import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { RWebShare } from "react-web-share";
import ImgSlider from "../../Links/ImgSlider";
import TextLoader from "../../TextLoader";
import Card from "../../Links/Card";
import Slider from "../../Links/Slider";
import Footer from "../../Footer";
import ReactSoundCloud from "react-soundcloud-embedded";
import Spotify from "react-spotify-embed";
import Video from "../../Links/Video";
import Documents from "../../Links/Documents";
export default function Essence(props) {
  const slider = JSON.parse(props.modeData.Slider.Links);
  let isSliderValueTrue = false;
  for (const slidertest of slider) {
    if (slidertest.isActive) {
      isSliderValueTrue = slidertest.isActive;
    }
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="TopBar">
        {props.data.ImageLocation ? (
          <div>
            <img
              style={{
                borderRadius: "50%",
                width: "65px",
                height: "65px",
              }}
              className="img-fluid"
              src={props.data.ImageLocation}
              alt=""
            />
          </div>
        ) : (
          ""
        )}
        <RWebShare
          data={{
            url: window.location.href,
          }}
        >
          <button className="share cursor_pointer">
            <p>share</p>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </button>
        </RWebShare>
      </div>
      <div className="TopBar topBarEssence p-fixed d-none">
        {props.data.ImageLocation ? (
          <div>
            <img
              style={{
                borderRadius: "50%",
                width: "65px",
                height: "65px",
              }}
              className="img-fluid"
              src={props.data.ImageLocation}
              alt=""
            />
          </div>
        ) : (
          ""
        )}
        <RWebShare
          data={{
            url: window.location.href,
          }}
        >
          <button className="share cursor_pointer">
            <p>share</p>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </button>
        </RWebShare>
      </div>
      <div className="essence p-relative">
        {props.heroData.length ? (
          <div
            style={{ marginBottom: "133px" }}
            className="slider border-none round-0 box-shadow-none"
          >
            <ImgSlider
              settings={settings}
              sliderImg={props.heroData}
              className="round-0"
              border="slick-list-border-0"
            />
          </div>
        ) : (
          ""
        )}
        <div className="container">
          <div
            className={
              props.heroData.length ? "heroBar" : "noBanerHeroBar heroBar"
            }
          >
            {props.data.ImageLocation ? (
              <div className="heroBar-image">
                <img
                  className="img-fluid"
                  src={props.data.ImageLocation}
                  alt=""
                />
              </div>
            ) : (
              ""
            )}
            <div className="px-4">
              <h1>
                {props.headingText}{" "}
                <span>{props.spanText ? props.spanText : ""} </span>
              </h1>
              <h2>{props.data.Work}</h2>
              <h3>
                {props.data.Location}
                {props.data.Country ? `, ${props.data.Country}` : ""}
              </h3>
            </div>
            <div className="heroIcon">
              <Card
                StandardLinks={JSON.parse(props.modeData.StandardLinks.Links)}
                theme={props.theme}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-direction-column">
        <div className="container order-1">
          {props.data.Bio.trim() ? (
            <div className="hero-detail">
              <pre id="hero__para">
                <TextLoader
                  text={props.data.Bio}
                  id="hero__para"
                  characterNumber="200"
                  btnClass="hero__btn"
                />
              </pre>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="container order-2">
          <div className="card-section">
            <Card
              CustomLinks={JSON.parse(props.modeData.CustomLinks.Links)}
              theme={props.theme}
            />
          </div>
        </div>
        {isSliderValueTrue && props.modeData.Slider.isActive ? (
          <div className="container essenceSlider order-3">
            <Slider
              data={JSON.parse(props.modeData.Slider.Links)}
              theme={props.theme}
            />
          </div>
        ) : (
          ""
        )}
        {/* {props.soundcloud[0] && props.soundcloud[0].isActive ? (
          <div className="container mt-4 soundcloud order-4">
            <ReactSoundCloud height="300px" url={props.soundcloud[0].URL} />
          </div>
        ) : (
          ""
        )} */}
        {props.spotify[0] && props.spotify[0].isActive ? (
          <div className="container mt-4 order-5">
            <Spotify
              width="100%"
              height="152px"
              wide
              link={props.spotify[0].URL.split("user/")[1]}
            />
          </div>
        ) : (
          ""
        )}

        {props.modeData.FeaturedVideo.URL &&
        props.modeData.FeaturedVideo.URL.trim() &&
        props.modeData.FeaturedVideo.isActive ? (
          <div className="container order-6">
            <Video data={props.modeData.FeaturedVideo} theme={props.theme} />
          </div>
        ) : (
          ""
        )}
        {props.modeData.Document.URL &&
        props.modeData.Document.URL.trim() &&
        props.modeData.Document.isActive ? (
          <div className="container order-7 card-section mt-4">
            <div className="essence-document_background">
              <Documents data={props.modeData.Document} theme={props.theme} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
}
