import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import TextLoader from "./TextLoader";
import CardSection from "./CardSection";
import ImgSlider from "./Links/ImgSlider";
import { CSSTransition } from "react-transition-group";
import NeumorphicContainer from "./NeumorphicContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { RWebShare } from "react-web-share";
import Neotronic from "./Theme/neotronic/Neotronic";
import ReactSoundCloud from "react-soundcloud-embedded";
import Spotify from "react-spotify-embed";
import Essence from "./Theme/essence/Essence";
import { useNavigate } from "react-router-dom";
export default function Home(props) {
  const { linkType, userId } = useParams();
  const [data, setData] = useState();
  const [modeData, setModeData] = useState();
  const [theme, setTheme] = useState();
  const [mode, setMode] = useState();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://7drkndiu7g.execute-api.ap-south-1.amazonaws.com/v1/previewprofile/${userId}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data["UserMessage"] === "Server Side Error") {
          navigate("/notfound");
        }
        if (linkType === "direct") {
          const StandardLinks = JSON.parse(
            data.DirectLinks.StandardLinks.Links
          );
          const CustomLinks = JSON.parse(data.DirectLinks.CustomLinks.Links);
          const sliders = JSON.parse(data.DirectLinks.Slider.Links);
          let isSliderValueTrue = false;
          for (const slider of sliders) {
            if (slider.isActive) {
              isSliderValueTrue = slider.isActive;
            }
          }

          if (
            isSliderValueTrue ||
            data.DirectLinks.Document.isActive ||
            data.DirectLinks.FeaturedVideo.isActive
          ) {
            setModeData(data.DirectLinks);
          } else if (StandardLinks.length) {
            const filterStandardLinks = StandardLinks.filter((value) => {
              return value.isActive === true;
            });

            if (filterStandardLinks.length) {
              let filterStandardLink = filterStandardLinks[0].URL;

              if (filterStandardLinks[0].Name === "Phone") {
                filterStandardLink = `tel:${filterStandardLinks[0].URL}`;
              } else if (filterStandardLinks[0].Name === "Whatsapp") {
                filterStandardLink = `https://wa.me/${filterStandardLinks[0].URL}`;
              } else if (filterStandardLinks[0].Name === "Gmail") {
                filterStandardLink = `mailto:${filterStandardLinks[0].URL}`;
              }

              window.location.replace(filterStandardLink);
            } else {
              const filterCustomLinks = CustomLinks.filter(
                (value) => value.isActive === true
              );

              let filterCustomLink = filterCustomLinks[0].URL;
              window.location.replace(filterCustomLink);
            }
          }
        } else if (linkType === "personal") {
          setModeData(data.PersonalLinks);
        } else if (linkType === "business") {
          setModeData(data.BusinessLinks);
        }
        setTheme(data.Theme.toLowerCase().split(" ")[0]);
        setMode(linkType);
        setData(data.PersonalInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  let hero;
  let spanText;
  let headingText;
  let soundcloud;
  let spotify;

  if (!(data === undefined)) {
    hero = JSON.parse(data.CoverImageLocation);
    soundcloud = JSON.parse(modeData.StandardLinks.Links).filter(
      (value) => value.Name === "Soundcloud"
    );

    spotify = JSON.parse(modeData.StandardLinks.Links).filter(
      (value) => value.Name === "Spotify"
    );

    props.dataFetcher(
      data,
      JSON.parse(modeData.Slider.Links),
      theme,
      window.location.href
    );
    window.addEventListener("scroll", () => {
      const TopBar = document.querySelector(".TopBar");
      const topBarNeotronic = document.querySelector(".topBarNeotronic");
      if (theme === "neotronic") {
        if (window.scrollY > 132) {
          topBarNeotronic.classList.remove("d-none");
        } else {
          topBarNeotronic.classList.add("d-none");
        }
      } else {
        if (TopBar) {
          if (window.scrollY > 266) {
            TopBar.classList.remove("d-none");
          } else {
            TopBar.classList.add("d-none");
          }
        }
      }
    });

    if (data.Name) {
      let primaryText = data.Name.trim().split(" ");

      // encode ("aaaabccaadeeee")
      // Output should be nested array
      // [[4, a] [1, b] [2, c] [2, a] [1, d][4, e]]
      // [[4, a] [1, b] [2, c] [2, a] [1, d][4, e]]

      if (!(primaryText.length === 1)) {
        spanText = primaryText[primaryText.length - 1];
        primaryText.pop();
      }
      headingText = primaryText.join(" ");
    }
  }

  return (
    <>
      <div className={`main-container theme-${theme}`}>
        {modeData === undefined ? (
          <Loader />
        ) : (
          <>
            {mode === "direct" ? (
              <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="fade"
              >
                {theme === "riorpad" || theme === "buwayne" ? (
                  <NeumorphicContainer
                    containerclassName="neumorphic-container round-25"
                    subcontainerclasses="sub-container round-25 p-2"
                    isLayer={true}
                  >
                    <div className="primary_container round-25 p-relative h-100vh">
                      {/* <CSSTransition
                        in={true}
                        appear={true}
                        timeout={1000}
                        classNames={modeData === undefined ? "" : "slide"}
                      >
                        <Loader mode="home" />
                      </CSSTransition> */}
                      <div className="TopBar d-none">
                        {data.ImageLocation ? (
                          <div
                            className={
                              hero.length ? "logo" : "logo-only text-center"
                            }
                          >
                            <img
                              className="img-fluid"
                              src={data.ImageLocation}
                              alt=""
                            />
                          </div>
                        ) : (
                          ""
                        )}

                        <h1>
                          {headingText} <span>{spanText ? spanText : ""} </span>
                        </h1>
                        <RWebShare
                          data={{
                            url: window.location.href,
                          }}
                        >
                          <button className="share cursor_pointer">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                          </button>
                        </RWebShare>
                      </div>
                      <CardSection
                        modeData={modeData}
                        theme={theme}
                        mode={mode}
                      />
                      <Footer
                        theme={theme}
                        mode={theme}
                        userName={data.Name}
                        linkType={linkType}
                      />
                    </div>
                  </NeumorphicContainer>
                ) : (
                  <div className="primary_container p-relative h-100vh">
                    {/* <CSSTransition
                      in={true}
                      appear={true}
                      timeout={1000}
                      classNames={modeData === undefined ? "" : "slide"}
                    >
                      <Loader mode="home" />
                    </CSSTransition> */}
                    <div className="TopBar d-none">
                      {data.ImageLocation ? (
                        <div
                          className={
                            hero.length ? "logo" : "logo-only text-center"
                          }
                        >
                          <img
                            className="img-fluid"
                            src={data.ImageLocation}
                            alt=""
                          />
                        </div>
                      ) : (
                        ""
                      )}

                      <h1>
                        {headingText} <span>{spanText ? spanText : ""} </span>
                      </h1>
                      <RWebShare
                        data={{
                          url: window.location.href,
                        }}
                      >
                        <button className="share cursor_pointer">
                          <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </button>
                      </RWebShare>
                    </div>
                    <CardSection
                      modeData={modeData}
                      theme={theme}
                      mode={mode}
                    />

                    <Footer
                      theme={theme}
                      mode={theme}
                      userName={data.Name}
                      linkType={linkType}
                    />
                  </div>
                )}
              </CSSTransition>
            ) : (
              <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="fade"
              >
                {theme === "neotronic" ? (
                  <section className="neotronic primary_container">
                    <div className="hero">
                      <Neotronic
                        heroData={hero}
                        data={data}
                        headingText={headingText}
                        spanText={spanText}
                        theme={theme}
                        modeData={modeData}
                        mode={mode}
                        soundcloud={soundcloud}
                        spotify={spotify}
                      />
                      <Footer
                        theme={theme}
                        mode={theme}
                        userName={data.Name}
                        linkType={linkType}
                      />
                    </div>
                  </section>
                ) : (
                  <>
                    {theme === "essence" ? (
                      <section className="essence primary_container">
                        <div className="hero">
                          <Essence
                            heroData={hero}
                            data={data}
                            headingText={headingText}
                            spanText={spanText}
                            theme={theme}
                            modeData={modeData}
                            mode={mode}
                            soundcloud={soundcloud}
                            spotify={spotify}
                          />
                        </div>
                        <Footer theme={theme} userName={data.Name} />
                      </section>
                    ) : (
                      <>
                        {theme === "riorpad" || theme === "buwayne" ? (
                          <NeumorphicContainer
                            containerclassName="neumorphic-container"
                            subcontainerclasses="sub-container round-25 p-2"
                            isLayer={true}
                          >
                            <div className="primary_container round-25 p-relative">
                              <section className="hero">
                                <div className="p-relative">
                                  {hero.length ? (
                                    <div className="slider border-none">
                                      <ImgSlider
                                        settings={settings}
                                        sliderImg={hero}
                                        className="round-0"
                                        border="slick-list-border-0"
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {data.ImageLocation ? (
                                    <div
                                      className={
                                        hero.length
                                          ? "logo"
                                          : "logo-only text-center d-flex justify-content-center"
                                      }
                                    >
                                      {theme === "riorpad" ? (
                                        <img
                                          className="img-fluid"
                                          src={data.ImageLocation}
                                          alt=""
                                        />
                                      ) : (
                                        <img
                                          className="img-fluid"
                                          src={data.ImageLocation}
                                          alt=""
                                        />
                                      )}
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <div
                                  className={
                                    data.ImageLocation && !hero.length
                                      ? "container text-center"
                                      : "container"
                                  }
                                >
                                  <div
                                    className={
                                      hero.length && data.ImageLocation
                                        ? "mt-5"
                                        : "mt-3"
                                    }
                                  >
                                    <h1>
                                      {headingText}{" "}
                                      <span>{spanText ? spanText : ""} </span>
                                    </h1>
                                    <h2>{data.Work}</h2>
                                    <h3>
                                      {data.Location}
                                      {data.Country ? `, ${data.Country}` : ""}
                                    </h3>
                                    {data.Bio.trim() ? (
                                      <NeumorphicContainer
                                        containerclassName="mt-3 round-10"
                                        subcontainerclasses="border-none mt-0 w-100 round-10"
                                      >
                                        <div className="hero-detail">
                                          <pre id="hero__para">
                                            <TextLoader
                                              text={data.Bio}
                                              id="hero__para"
                                              characterNumber="200"
                                              btnClass="hero__btn"
                                            />
                                          </pre>
                                        </div>
                                      </NeumorphicContainer>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                              </section>
                              <div className="TopBar d-none">
                                {data.ImageLocation ? (
                                  <div
                                    className={
                                      hero.length
                                        ? "logo"
                                        : "logo-only text-center"
                                    }
                                  >
                                    <img
                                      className="img-fluid"
                                      src={data.ImageLocation}
                                      alt=""
                                    />
                                  </div>
                                ) : (
                                  ""
                                )}

                                <h1>
                                  {headingText}{" "}
                                  <span>{spanText ? spanText : ""} </span>
                                </h1>
                                <RWebShare
                                  data={{
                                    url: window.location.href,
                                  }}
                                >
                                  <button className="share cursor_pointer">
                                    <FontAwesomeIcon
                                      icon={faArrowUpFromBracket}
                                    />
                                  </button>
                                </RWebShare>
                              </div>
                              <CardSection modeData={modeData} theme={theme} />
                              {soundcloud[0] &&
                              soundcloud[0].URL &&
                              soundcloud[0].isActive ? (
                                <div className="container">
                                  <NeumorphicContainer
                                    containerclassName="round-25 mt-4"
                                    subcontainerclasses="border-none mt-0 p-2 round-25 w-100 justify-content-center"
                                  >
                                    <div className="soundcloud">
                                      <ReactSoundCloud
                                        height="300px"
                                        url={soundcloud[0].URL}
                                      />
                                    </div>
                                  </NeumorphicContainer>
                                </div>
                              ) : (
                                ""
                              )}
                              {spotify[0] &&
                              spotify[0].URL &&
                              spotify[0].isActive ? (
                                <div className="container">
                                  <NeumorphicContainer
                                    containerclassName="round-25 mt-4"
                                    subcontainerclasses="border-none mt-0 p-2 round-25 w-100 justify-content-center"
                                  >
                                    <Spotify
                                      width="100%"
                                      height="152px"
                                      wide
                                      link={spotify[0].URL.split("user/")[1]}
                                    />
                                  </NeumorphicContainer>
                                </div>
                              ) : (
                                ""
                              )}

                              <Footer
                                theme={theme}
                                mode={theme}
                                userName={data.Name}
                                linkType={linkType}
                              />
                            </div>
                          </NeumorphicContainer>
                        ) : (
                          <div className="primary_container p-relative">
                            <section className="hero">
                              <div className="p-relative">
                                {hero.length ? (
                                  <div className="slider border-none round-0 box-shadow-none">
                                    <ImgSlider
                                      settings={settings}
                                      sliderImg={hero}
                                      className="round-0"
                                      border="slick-list-border-0"
                                    />
                                  </div>
                                ) : (
                                  ""
                                )}
                                {data.ImageLocation ? (
                                  <div
                                    className={
                                      hero.length
                                        ? "logo"
                                        : "logo-only text-center"
                                    }
                                  >
                                    <img
                                      className="img-fluid"
                                      src={data.ImageLocation}
                                      alt=""
                                    />
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                              <div
                                className={
                                  data.ImageLocation && !hero.length
                                    ? "container text-center"
                                    : "container"
                                }
                              >
                                <div
                                  className={
                                    hero.length && data.ImageLocation
                                      ? "mt-5"
                                      : "mt-3"
                                  }
                                >
                                  <h1>
                                    {headingText}{" "}
                                    <span>{spanText ? spanText : ""} </span>
                                  </h1>
                                  <h2>{data.Work}</h2>
                                  <h3>
                                    {data.Location}
                                    {data.Country ? `, ${data.Country}` : ""}
                                  </h3>

                                  {data.Bio.trim() ? (
                                    <div
                                      className={
                                        theme === "etyne" || theme === "dahwoo"
                                          ? "d-none"
                                          : "hero-detail"
                                      }
                                    >
                                      <pre id="hero__para">
                                        <TextLoader
                                          text={data.Bio}
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
                              </div>
                            </section>
                            <div className="TopBar d-none">
                              {data.ImageLocation ? (
                                <div
                                  className={
                                    hero.length
                                      ? "logo"
                                      : "logo-only text-center"
                                  }
                                >
                                  <img
                                    className="img-fluid"
                                    src={data.ImageLocation}
                                    alt=""
                                  />
                                </div>
                              ) : (
                                ""
                              )}

                              <h1>
                                {headingText}{" "}
                                <span>{spanText ? spanText : ""} </span>
                              </h1>
                              <RWebShare
                                data={{
                                  url: window.location.href,
                                }}
                              >
                                <button className="share cursor_pointer">
                                  <FontAwesomeIcon
                                    icon={faArrowUpFromBracket}
                                  />
                                </button>
                              </RWebShare>
                            </div>

                            {theme === "etyne" || theme === "dahwoo" ? (
                              <CardSection
                                modeData={modeData}
                                theme={theme}
                                heroData={data.Bio}
                              />
                            ) : (
                              <CardSection modeData={modeData} theme={theme} />
                            )}
                            <div className="container">
                              {soundcloud[0] ? (
                                <div className="mt-4 soundcloud">
                                  <ReactSoundCloud
                                    height="250px"
                                    wide
                                    url={soundcloud[0].URL}
                                  />
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                            {spotify[0] && spotify[0].isActive ? (
                              <div className="container mt-4 order-5">
                                <Spotify
                                  width="100%"
                                  height="152px"
                                  wide
                                  link={spotify[0].URL.split("user/")[1]}
                                />
                              </div>
                            ) : (
                              ""
                            )}

                            <Footer
                              mode={mode}
                              userName={data.Name}
                              theme={theme}
                              linkType={linkType}
                            />
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </CSSTransition>
            )}
          </>
        )}
      </div>
    </>
  );
}
