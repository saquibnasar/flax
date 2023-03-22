import React, { useState, useRef } from "react";
import TextLoader from "../TextLoader";
import CloseBtn from "./CloseBtn";
import ImgSlider from "./ImgSlider";
import { CSSTransition } from "react-transition-group";
import NeumorphicContainer from "../NeumorphicContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faParagraph } from "@fortawesome/free-solid-svg-icons";
import { faHeading } from "@fortawesome/free-solid-svg-icons";
export default function Slider({
  data,
  linkHandler,
  isClosed,
  theme,
  mode,
  EssenceLayout,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState(data[0].Title);
  const [subTitle, setSubTitle] = useState(data[0].SubTitle);
  const [sliderUrl, setSliderUrl] = useState(data[0].SliderUrl);

  const changeTextHandler = (tupe) => {
    setTitle(data[tupe].Title);
    setSubTitle(data[tupe].SubTitle);
    setSliderUrl(data[tupe].SliderUrl);
  };

  const changeTextDoteHandler = () => {
    setTitle(data[currentPage].Title);
    setSubTitle(data[currentPage].SubTitle);
    setSliderUrl(data[currentPage].SliderUrl);
  };

  const slickDots = document.querySelector(".slick-dots");

  if (slickDots) {
    slickDots.addEventListener("click", changeTextDoteHandler);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      changeTextHandler(current);
      setCurrentPage(current);
    },
  };
  const settingsEssence = {
    dots: true,
    infinite: true,
    speed: 500,
    // variableWidth: true,
    // centerPadding: "150px",
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      changeTextHandler(current);
      setCurrentPage(current);
    },
  };
  const slider = data.filter((data) => data.isActive === true);

  const sliderRef = useRef();

  const settingsNeotronic = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // cssEase: "linear",
    // fade: true,
    initialSlide: 0,
    afterChange: (current) => {
      changeTextHandler(current);
      setCurrentPage(current);
    },
  };
  return (
    <>
      {mode ? (
        <>
          <div
            className={
              isClosed === "etyne" ||
              isClosed === "shencho" ||
              isClosed === "consmy"
                ? "mt-4 round-20"
                : "mt-4"
            }
          >
            <CSSTransition
              in={true}
              appear={true}
              timeout={600}
              classNames={"slider_height_up"}
            >
              <div className="slider__text__change d-flex flex-direction-column">
                {theme === "riorpad" || theme === "buwayne" ? (
                  <>
                    <div className="slider imgSliderDirect">
                      <NeumorphicContainer
                        containerclassName="round-25 d-flex"
                        subcontainerclasses="border-none mt-0 p-2 round-25 w-100"
                      >
                        <ImgSlider settings={settings} sliderImg={data} />
                      </NeumorphicContainer>
                      {title && title.trim() ? (
                        <div className="swiper-content">
                          <h4 id="slider__title">
                            <TextLoader
                              text={title}
                              id="slider__title"
                              characterNumber="50"
                              btnClass="slider__btn"
                            />
                          </h4>
                        </div>
                      ) : (
                        ""
                      )}

                      {subTitle && subTitle.trim() ? (
                        <div className="swiper-content">
                          <pre
                            className={isClosed ? "slider_bottom-para" : ""}
                            id="slider__para"
                          >
                            <TextLoader
                              text={subTitle}
                              id="slider__para"
                              characterNumber="104"
                              btnClass="slider__btn"
                            />
                          </pre>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    {theme === "neotronic" ? (
                      <div className="neotronicSlider">
                        <div className="slider overflow-hidden">
                          <ImgSlider
                            settings={settingsNeotronic}
                            sliderImg={data}
                            className="round-0"
                            sliderRef={sliderRef}
                          />
                          <div className="">
                            {title && title.trim() ? (
                              <div className="swiper-content">
                                <h4 id="slider__title" className="d-none">
                                  <TextLoader
                                    text={title}
                                    id="slider__title"
                                    characterNumber="50"
                                    btnClass="slider__btn"
                                    capacityCount={140}
                                  />
                                </h4>
                              </div>
                            ) : (
                              ""
                            )}
                            {subTitle && subTitle.trim() ? (
                              <div
                                className={`${
                                  sliderUrl && sliderUrl.trim() ? "round-0" : ""
                                } swiper-content`}
                              >
                                <pre className="d-none" id="slider__para">
                                  <TextLoader
                                    text={subTitle}
                                    id="slider__para"
                                    characterNumber="104"
                                    btnClass="slider__btn"
                                    capacityCount={191}
                                  />
                                </pre>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="sliderBtn_container">
                            {title && title.trim() ? (
                              <button
                                className="sliderBtn sliderBtn_heading"
                                onClick={() => {
                                  const slider__title =
                                    document.querySelector("#slider__title");
                                  const slider__para =
                                    document.querySelector("#slider__para");
                                  if (
                                    !slider__para.classList.contains("d-none")
                                  ) {
                                    slider__para.classList.add("d-none");
                                  }
                                  if (
                                    slider__title.classList.contains("d-none")
                                  ) {
                                    slider__title.classList.remove("d-none");
                                  } else {
                                    slider__title.classList.add("d-none");
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faHeading} />
                              </button>
                            ) : (
                              ""
                            )}
                            {subTitle && subTitle.trim() ? (
                              <button
                                className="sliderBtn sliderBtn_paragraph"
                                onClick={() => {
                                  const slider__title =
                                    document.querySelector("#slider__title");
                                  const slider__para =
                                    document.querySelector("#slider__para");
                                  if (
                                    !slider__title.classList.contains("d-none")
                                  ) {
                                    slider__title.classList.add("d-none");
                                  }
                                  if (
                                    slider__para.classList.contains("d-none")
                                  ) {
                                    slider__para.classList.remove("d-none");
                                  } else {
                                    slider__para.classList.add("d-none");
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faParagraph} />
                              </button>
                            ) : (
                              ""
                            )}
                            {slider.length > 1 ? (
                              <button
                                className="sliderBtn"
                                onClick={() => {
                                  sliderRef.current.slickNext();
                                  const capacity =
                                    document.querySelector(".capacity");
                                  if (capacity) {
                                    capacity.classList.remove("capacity");
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faArrowRight} />
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                          {sliderUrl && sliderUrl.trim() ? (
                            <a
                              href={sliderUrl}
                              className="neotronicLink"
                              target="blank"
                            >
                              <p className="neotronicLink_text">
                                Click here for link
                              </p>
                              <FontAwesomeIcon icon={faLink} />
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ) : (
                      <>
                        {theme === "essence" ? (
                          <div className="slider overflow-hidden row">
                            {data.map((value, id) => {
                              if (value.isActive) {
                                return (
                                  <div
                                    key={id}
                                    className="swiper-slide col-6 d-flex flex-direction-column"
                                  >
                                    {value.Title && value.Title.trim() ? (
                                      <div className="swiper-content">
                                        <h4 id="slider__title">
                                          <TextLoader
                                            text={value.Title}
                                            id="slider__title"
                                            characterNumber="50"
                                            btnClass="slider__btn"
                                            capacityCount={140}
                                            theme={theme}
                                            type="slider"
                                          />
                                        </h4>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div className="p-relative">
                                      {sliderUrl && sliderUrl.trim() ? (
                                        <a
                                          href={sliderUrl}
                                          className="neotronicLink"
                                          target="blank"
                                        >
                                          <p className="neotronicLink_text">
                                            Click here for link
                                          </p>
                                          <FontAwesomeIcon icon={faLink} />
                                        </a>
                                      ) : (
                                        ""
                                      )}
                                      <img
                                        className="img-fluid"
                                        src={value.URL}
                                        alt=""
                                      />
                                    </div>
                                    {value.SubTitle && value.SubTitle.trim() ? (
                                      <div className="swiper-content">
                                        <pre id="slider__para">
                                          <TextLoader
                                            text={value.SubTitle}
                                            id="slider__para"
                                            characterNumber="104"
                                            btnClass="slider__btn"
                                            capacityCount={191}
                                            theme={theme}
                                            type="slider"
                                          />
                                        </pre>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                );
                              }
                              return "";
                            })}
                          </div>
                        ) : (
                          <div className="imgSliderDirect">
                            <div
                              className={
                                theme === "etyne" ||
                                theme === "dahwoo" ||
                                theme === "phiverse"
                                  ? "slider overflow-hidden d-flex flex-direction-column"
                                  : "slider overflow-hidden"
                              }
                            >
                              <div className={isClosed ? "order-2" : ""}>
                                <ImgSlider
                                  settings={settings}
                                  sliderImg={data}
                                  className="round-0"
                                />
                              </div>
                            </div>
                            {title && title.trim() ? (
                              <div
                                className={
                                  isClosed
                                    ? "swiper-content round-0 order-1"
                                    : "swiper-content round-0"
                                }
                              >
                                <h4 id="slider__title">
                                  <TextLoader
                                    text={title}
                                    id="slider__title"
                                    characterNumber="50"
                                    btnClass="slider__btn"
                                  />
                                </h4>
                              </div>
                            ) : (
                              ""
                            )}
                            {subTitle && subTitle.trim() ? (
                              <div
                                className={
                                  isClosed
                                    ? `${
                                        sliderUrl && sliderUrl.trim()
                                          ? "round-0"
                                          : ""
                                      } swiper-content order-3`
                                    : `${
                                        sliderUrl && sliderUrl.trim()
                                          ? "round-0"
                                          : ""
                                      } swiper-content`
                                }
                              >
                                <pre
                                  className={
                                    theme === "dahwoo"
                                      ? "slider_bottom-para"
                                      : ""
                                  }
                                  id="slider__para"
                                >
                                  <TextLoader
                                    text={subTitle}
                                    id="slider__para"
                                    characterNumber="104"
                                    btnClass="slider__btn"
                                  />
                                </pre>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </CSSTransition>
          </div>
        </>
      ) : (
        <>
          <div
            className={
              isClosed === "etyne" ||
              isClosed === "shencho" ||
              isClosed === "consmy"
                ? "mt-4 round-20"
                : "mt-4"
            }
          >
            <CSSTransition
              in={true}
              appear={true}
              timeout={600}
              classNames={"slider_height_up"}
            >
              <div className="slider__text__change d-flex flex-direction-column">
                {theme === "riorpad" || theme === "buwayne" ? (
                  <>
                    <div className="slider">
                      <NeumorphicContainer
                        containerclassName="round-25 d-flex"
                        subcontainerclasses="border-none mt-0 p-2 round-25 w-100"
                      >
                        <ImgSlider settings={settings} sliderImg={data} />
                        {title && title.trim() ? (
                          <div className="swiper-content">
                            <h4 id="slider__title">
                              <TextLoader
                                text={title}
                                id="slider__title"
                                characterNumber="50"
                                btnClass="slider__btn"
                              />
                            </h4>
                          </div>
                        ) : (
                          ""
                        )}
                        {subTitle && subTitle.trim() ? (
                          <div className="swiper-content">
                            <pre
                              className={isClosed ? "slider_bottom-para" : ""}
                              id="slider__para"
                            >
                              <TextLoader
                                text={subTitle}
                                id="slider__para"
                                characterNumber="104"
                                btnClass="slider__btn"
                              />
                            </pre>
                          </div>
                        ) : (
                          ""
                        )}
                        {sliderUrl && sliderUrl.trim() ? (
                          <div className="download mt-3">
                            <NeumorphicContainer
                              containerclassName="p-1px d-flex round-25"
                              subcontainerclasses="border-none mt-0 round-25 w-100 download_btn"
                            >
                              <a href={sliderUrl} target="_black">
                                learn more
                              </a>
                            </NeumorphicContainer>
                          </div>
                        ) : (
                          ""
                        )}
                      </NeumorphicContainer>
                    </div>
                    {!isClosed && title ? (
                      <div className="d-flex justify-content-center mt-2">
                        <CloseBtn
                          linkHandler={linkHandler}
                          mode="neuMorphism"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <>
                    {theme === "neotronic" ? (
                      <>
                        <div className="slider overflow-hidden">
                          <ImgSlider
                            settings={settingsNeotronic}
                            sliderImg={data}
                            className="round-0"
                            sliderRef={sliderRef}
                          />
                          <div className="">
                            {title && title.trim() ? (
                              <div className="swiper-content">
                                <h4 id="slider__title" className="d-none">
                                  <TextLoader
                                    text={title}
                                    id="slider__title"
                                    characterNumber="50"
                                    btnClass="slider__btn"
                                    capacityCount={140}
                                  />
                                </h4>
                              </div>
                            ) : (
                              ""
                            )}
                            {subTitle && subTitle.trim() ? (
                              <div
                                className={`${
                                  sliderUrl && sliderUrl.trim() ? "round-0" : ""
                                } swiper-content`}
                              >
                                <pre className="d-none" id="slider__para">
                                  <TextLoader
                                    text={subTitle}
                                    id="slider__para"
                                    characterNumber="104"
                                    btnClass="slider__btn"
                                    capacityCount={191}
                                  />
                                </pre>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="sliderBtn_container">
                            {title && title.trim() ? (
                              <button
                                className="sliderBtn sliderBtn_heading"
                                onClick={() => {
                                  const slider__title =
                                    document.querySelector("#slider__title");
                                  const slider__para =
                                    document.querySelector("#slider__para");
                                  if (
                                    !slider__para.classList.contains("d-none")
                                  ) {
                                    slider__para.classList.add("d-none");
                                  }
                                  if (
                                    slider__title.classList.contains("d-none")
                                  ) {
                                    slider__title.classList.remove("d-none");
                                  } else {
                                    slider__title.classList.add("d-none");
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faHeading} />
                              </button>
                            ) : (
                              ""
                            )}
                            {subTitle && subTitle.trim() ? (
                              <button
                                className="sliderBtn sliderBtn_paragraph"
                                onClick={() => {
                                  const slider__title =
                                    document.querySelector("#slider__title");
                                  const slider__para =
                                    document.querySelector("#slider__para");
                                  if (
                                    !slider__title.classList.contains("d-none")
                                  ) {
                                    slider__title.classList.add("d-none");
                                  }
                                  if (
                                    slider__para.classList.contains("d-none")
                                  ) {
                                    slider__para.classList.remove("d-none");
                                  } else {
                                    slider__para.classList.add("d-none");
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faParagraph} />
                              </button>
                            ) : (
                              ""
                            )}
                            {slider.length > 1 ? (
                              <button
                                className="sliderBtn"
                                onClick={() => {
                                  sliderRef.current.slickNext();
                                  const capacity =
                                    document.querySelector(".capacity");
                                  if (capacity) {
                                    capacity.classList.remove("capacity");
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faArrowRight} />
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                          {sliderUrl && sliderUrl.trim() ? (
                            <a
                              href={sliderUrl}
                              className="neotronicLink"
                              target="blank"
                            >
                              <p className="neotronicLink_text">
                                Click here for link
                              </p>
                              <FontAwesomeIcon icon={faLink} />
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        {theme === "essence" ? (
                          <>
                            {EssenceLayout ? (
                              <div className="slider overflow-hidden p-relative">
                                <ImgSlider
                                  settings={settingsEssence}
                                  sliderImg={data}
                                />
                                {sliderUrl && sliderUrl.trim() ? (
                                  <a
                                    href={sliderUrl}
                                    className="neotronicLink"
                                    target="blank"
                                  >
                                    <p className="neotronicLink_text">
                                      Click here for link
                                    </p>
                                    <FontAwesomeIcon icon={faLink} />
                                  </a>
                                ) : (
                                  ""
                                )}

                                {title && title.trim() ? (
                                  <div className="swiper-content mt-3">
                                    <h4 id="slider__title">{title}</h4>
                                  </div>
                                ) : (
                                  ""
                                )}

                                {subTitle && subTitle.trim() ? (
                                  <div className="swiper-content">
                                    <pre id="slider__para">{subTitle}</pre>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            ) : (
                              <div className="slider overflow-hidden row">
                                {data.map((value, id) => {
                                  if (value.isActive) {
                                    return (
                                      <div
                                        key={id}
                                        className="swiper-slide col-6 d-flex flex-direction-column"
                                      >
                                        {value.Title && value.Title.trim() ? (
                                          <div className="swiper-content">
                                            <h4 id="slider__title">
                                              <TextLoader
                                                text={value.Title}
                                                id="slider__title"
                                                characterNumber="50"
                                                btnClass="slider__btn"
                                                capacityCount={140}
                                                theme={theme}
                                                type="slider"
                                              />
                                            </h4>
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                        <div className="p-relative">
                                          {sliderUrl && sliderUrl.trim() ? (
                                            <a
                                              href={sliderUrl}
                                              className="neotronicLink"
                                              target="blank"
                                            >
                                              <p className="neotronicLink_text">
                                                Click here for link
                                              </p>
                                              <FontAwesomeIcon icon={faLink} />
                                            </a>
                                          ) : (
                                            ""
                                          )}
                                          <img
                                            className="img-fluid"
                                            src={value.URL}
                                            alt=""
                                          />
                                        </div>
                                        {value.SubTitle &&
                                        value.SubTitle.trim() ? (
                                          <div className="swiper-content">
                                            <pre id="slider__para">
                                              <TextLoader
                                                text={value.SubTitle}
                                                id="slider__para"
                                                characterNumber="104"
                                                btnClass="slider__btn"
                                                capacityCount={191}
                                                theme={theme}
                                                type="slider"
                                              />
                                            </pre>
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    );
                                  }
                                  return "";
                                })}
                              </div>
                            )}
                          </>
                        ) : (
                          <>
                            <div
                              className={
                                theme === "etyne" ||
                                theme === "dahwoo" ||
                                theme === "phiverse"
                                  ? "slider overflow-hidden d-flex flex-direction-column"
                                  : "slider overflow-hidden"
                              }
                            >
                              <div className={isClosed ? "order-2" : ""}>
                                <ImgSlider
                                  settings={settings}
                                  sliderImg={data}
                                  className="round-0"
                                />
                              </div>
                              {title && title.trim() ? (
                                <div
                                  className={
                                    isClosed
                                      ? "swiper-content round-0 order-1"
                                      : "swiper-content round-0"
                                  }
                                >
                                  <h4 id="slider__title">
                                    <TextLoader
                                      text={title}
                                      id="slider__title"
                                      characterNumber="50"
                                      btnClass="slider__btn"
                                    />
                                  </h4>
                                </div>
                              ) : (
                                ""
                              )}
                              {subTitle && subTitle.trim() ? (
                                <div
                                  className={
                                    isClosed
                                      ? `${
                                          sliderUrl && sliderUrl.trim()
                                            ? "round-0"
                                            : ""
                                        } swiper-content order-3`
                                      : `${
                                          sliderUrl && sliderUrl.trim()
                                            ? "round-0"
                                            : ""
                                        } swiper-content`
                                  }
                                >
                                  <pre
                                    className={
                                      isClosed ? "slider_bottom-para" : ""
                                    }
                                    id="slider__para"
                                  >
                                    <TextLoader
                                      text={subTitle}
                                      id="slider__para"
                                      characterNumber="104"
                                      btnClass="slider__btn"
                                    />
                                  </pre>
                                </div>
                              ) : (
                                ""
                              )}
                              {sliderUrl && sliderUrl.trim() ? (
                                <div
                                  className={
                                    mode === "shencho" || mode === "consmy"
                                      ? "download pb-4 order-3"
                                      : "download pb-4 order-4"
                                  }
                                >
                                  <a
                                    href={sliderUrl}
                                    target="_black"
                                    className="download_btn"
                                  >
                                    learn more
                                  </a>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                            <div
                              className={
                                theme === "shencho" || theme === "consmy"
                                  ? "order-4"
                                  : "order-3"
                              }
                            >
                              {!isClosed && title ? (
                                <CloseBtn linkHandler={linkHandler} />
                              ) : (
                                ""
                              )}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </CSSTransition>
          </div>
        </>
      )}
    </>
  );
}
