import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { RWebShare } from "react-web-share";
import ImgSlider from "../../Links/ImgSlider";
import TextLoader from "../../TextLoader";
import Card from "../../Links/Card";
import Slider from "../../Links/Slider";
import Spotify from "react-spotify-embed";
import Video from "../../Links/Video";
import Documents from "../../Links/Documents";
import ReactSoundCloud from "react-soundcloud-embedded";
// import { InstagramEmbed } from "react-social-media-embed";
// import {
//   TwitterTimelineEmbed,
//   TwitterShareButton,
//   TwitterFollowButton,
//   TwitterHashtagButton,
//   TwitterMentionButton,
//   TwitterTweetEmbed,
//   TwitterMomentShare,
//   TwitterDMButton,
//   TwitterVideoEmbed,
//   TwitterOnAirButton,
// } from "react-twitter-embed";
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

export default function Neotronic(props) {
  const CardStandardLinks = JSON.parse(props.modeData.StandardLinks.Links);

  let isCardStandardLinksValueTrue = false;

  for (const CardStandardLinkstest of CardStandardLinks) {
    if (CardStandardLinkstest.isActive) {
      isCardStandardLinksValueTrue = CardStandardLinkstest.isActive;
    }
  }

  const CardCustomLinks = JSON.parse(props.modeData.CustomLinks.Links);

  let isCardCustomValueTrue = false;

  for (const CardCustomstest of CardCustomLinks) {
    if (CardCustomstest.isActive) {
      isCardCustomValueTrue = CardCustomstest.isActive;
    }
  }

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
  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  return (
    <>
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
          },
          fpsLimit: 60,
          particles: {
            groups: {
              z5000: {
                number: {
                  value: 70,
                },
                zIndex: {
                  value: 5000,
                },
              },
              z7500: {
                number: {
                  value: 30,
                },
                zIndex: {
                  value: 75,
                },
              },
              z2500: {
                number: {
                  value: 50,
                },
                zIndex: {
                  value: 25,
                },
              },
              z1000: {
                number: {
                  value: 40,
                },
                zIndex: {
                  value: 10,
                },
              },
            },
            number: {
              value: 200,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
              animation: {
                enable: false,
                speed: 20,
                sync: true,
              },
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
              random: false,
              animation: {
                enable: false,
                speed: 3,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
            },
            links: {
              enable: false,
              distance: 100,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              angle: {
                value: 10,
                offset: 0,
              },
              enable: true,
              speed: 5,
              direction: "right",
              random: false,
              straight: true,
              outModes: {
                default: "out",
              },
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            zIndex: {
              value: 5,
              opacityRate: 0.5,
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: false,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                links: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 200,
              },
              push: {
                quantity: 4,
                groups: ["z5000", "z7500", "z2500", "z1000"],
              },
              remove: {
                quantity: 2,
              },
            },
          },
          detectRetina: true,
          background: {
            color: "#000000",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          emitters: {
            position: {
              y: 55,
              x: -30,
            },
            rate: {
              delay: 7,
              quantity: 1,
            },
            size: {
              width: 0,
              height: 0,
            },
            particles: {
              shape: {
                type: "images",
                options: {
                  images: [
                    {
                      src: "https://particles.js.org/images/amongus_blue.png",
                      width: 205,
                      height: 267,
                    },
                    {
                      src: "https://particles.js.org/images/amongus_cyan.png",
                      width: 207,
                      height: 265,
                    },
                    {
                      src: "https://particles.js.org/images/amongus_green.png",
                      width: 204,
                      height: 266,
                    },
                    {
                      src: "https://particles.js.org/images/amongus_lime.png",
                      width: 206,
                      height: 267,
                    },
                    {
                      src: "https://particles.js.org/images/amongus_orange.png",
                      width: 205,
                      height: 265,
                    },
                    {
                      src: "https://particles.js.org/images/amongus_pink.png",
                      width: 205,
                      height: 265,
                    },
                    {
                      src: "https://particles.js.org/images/amongus_red.png",
                      width: 204,
                      height: 267,
                    },
                    {
                      src: "https://particles.js.org/images/amongus_white.png",
                      width: 205,
                      height: 267,
                    },
                  ],
                },
              },
              size: {
                value: 40,
              },
              move: {
                speed: 10,
                outModes: {
                  default: "destroy",
                  left: "none",
                },
                straight: true,
              },
              zIndex: {
                value: 0,
              },
              rotate: {
                value: {
                  min: 0,
                  max: 360,
                },
                animation: {
                  enable: true,
                  speed: 10,
                  sync: true,
                },
              },
            },
          },
        }}
      /> */}
      <div
        className={
          props.data.ImageLocation
            ? "TopBar z-1"
            : "TopBar justify-content-end z-1"
        }
      >
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
      <div
        className={
          props.data.ImageLocation
            ? "TopBar topBarNeotronic p-fixed d-none z-1"
            : "justify-content-end TopBar topBarNeotronic p-fixed d-none z-1"
        }
      >
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
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CUbHfhpswxt/"
          width={"100%"}
        />
      </div> */}
      {/* <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{ height: 400 }}
      />
      <TwitterTweetEmbed tweetId={"933354946111705097"} />
      <TwitterShareButton
        url={"https://facebook.com/saurabhnemade"}
        options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
      />
      <TwitterMentionButton screenName={"saurabhnemade"} />
      <TwitterHashtagButton tag={"cybersecurity"} />
      <TwitterFollowButton screenName={"saurabhnemade"} />
      <TwitterMomentShare momentId={"650667182356082688"} />
      <TwitterDMButton id={1364031673} />
      <TwitterVideoEmbed id={"560070183650213889"} />
      <TwitterOnAirButton id={"560070183650213889"} /> */}

      <div className="neotronic p-relative z-1">
        {props.heroData.length ? (
          <div className="slider neotronicBanner border-none round-0 box-shadow-none z-1">
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
        <div className="container z-1">
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
            <div className={props.data.ImageLocation ? "px-4 mt-sm-4" : "px-4"}>
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
            {isCardStandardLinksValueTrue ? (
              <div className="heroIcon">
                <Card
                  StandardLinks={JSON.parse(props.modeData.StandardLinks.Links)}
                  theme={props.theme}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="d-flex flex-direction-column z-1">
        <div className="container z-1">
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
        {isCardCustomValueTrue ? (
          <div
            className={`container order-${props.modeData.CustomLinks.Order} z-1`}
          >
            <div className="card-section">
              <Card
                CustomLinks={JSON.parse(props.modeData.CustomLinks.Links)}
                theme={props.theme}
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {isSliderValueTrue && props.modeData.Slider.isActive ? (
          <div
            className={`container neotronicSlider order-${props.modeData.Slider.Order} z-1`}
          >
            <Slider
              data={JSON.parse(props.modeData.Slider.Links)}
              theme={props.theme}
            />
          </div>
        ) : (
          ""
        )}
        {props.soundcloud[0] && props.soundcloud[0].isActive ? (
          <div className="container mt-4 soundcloud order-4 z-1">
            <ReactSoundCloud height="300px" url={props.soundcloud[0].URL} />
          </div>
        ) : (
          ""
        )}
        {props.spotify[0] && props.spotify[0].isActive ? (
          <div className="container mt-4 order-5 spotify z-1">
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
          <div
            className={`container order-${props.modeData.FeaturedVideo.Order} z-1`}
          >
            <Video data={props.modeData.FeaturedVideo} theme={props.theme} />
          </div>
        ) : (
          ""
        )}
        {props.modeData.Document.URL &&
        props.modeData.Document.URL.trim() &&
        props.modeData.Document.isActive ? (
          <div
            className={`container order-${props.modeData.Document.Order} card-section mt-4 z-1`}
          >
            <div className="neotronic-document_background">
              <Documents data={props.modeData.Document} theme={props.theme} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
