import React from "react";
import CloseBtn from "./CloseBtn";
import { CSSTransition } from "react-transition-group";
import TextLoader from "../TextLoader";
import NeumorphicContainer from "../NeumorphicContainer";
import ReactPlayer from "react-player/youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeading } from "@fortawesome/free-solid-svg-icons";
export default function Video({ data, linkHandler, isClosed, theme, mode }) {
  let url;
  if (data.URL.split("/")) {
    url = data.URL.split("/")[data.URL.split("/").length - 1].toString();
  } else if (!(data.URL.split("=")[0].length === 31)) {
    url = data.URL.split("embed")[1].split("/")[1].split("?")[0];
  } else {
    url = data.URL.split("=")[1].toString().split("&")[0];
  }

  return (
    <>
      {mode ? (
        <CSSTransition
          in={true}
          appear={true}
          timeout={600}
          className={"video_height_up"}
        >
          <div className="">
            <div className="mt-4 h-100 youtube slider videoDirect">
              {theme === "riorpad" || theme === "buwayne" ? (
                <>
                  <NeumorphicContainer
                    containerclassName="round-25"
                    subcontainerclasses="border-none mt-0 p-1 round-25 w-100 justify-content-center"
                  >
                    <div className="_username__featuredLink__MeYB7">
                      <div className="BaseEmbeddedLink_baseEmbeddedLinkWrapper__SlpfZ">
                        <div className="BaseEmbeddedLink_baseEmbeddedLink__WXu5a">
                          <div className="BaseEmbeddedLink_baseEmbeddedLinkContainer__SlSm5 BaseEmbeddedLink_baseEmbeddedLinkContainerEmbed__py5x8">
                            <div className="BaseEmbeddedLink_baseEmbeddedLinkItem__EDHSQ BaseEmbeddedLink_baseEmbeddedLinkItemVisible__63uQ_">
                              <div className="EmbeddedYouTube_embeddedYouTube__kZebg EmbeddedYouTube_featuredLinkEmbeddedVideo__GERzu">
                                <div>
                                  <iframe
                                    className="EmbeddedYouTube_embeddedVideoIframe__BnmH8"
                                    src={`https://www.youtube.com/embed/${url}?showinfo=0&amp;modestbranding=1&modestbranding=3&controls=0&rel=1&height="250"`}
                                    allowFullScreen
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NeumorphicContainer>
                  {data.Title.trim() ? (
                    <>
                      <div className="swiper-content border-none round-0">
                        <p className="slider_bottom-para" id="slider__para">
                          <TextLoader
                            text={data.Title}
                            id="slider__para"
                            characterNumber="95"
                            btnClass="slider__btn"
                          />
                        </p>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <>
                  {theme === "neotronic" || theme === "essence" ? (
                    <div className="h-100 overflow-hidden youtube slider p-relative">
                      <>
                        {data.Title.trim() ? (
                          <>
                            <div className="swiper-content border-none round-0 youtube-text_display">
                              <h4
                                className="slider_bottom-para d-none"
                                id="neotronic_title"
                              >
                                <TextLoader
                                  text={data.Title}
                                  id="neotronic_title"
                                  characterNumber="50"
                                  btnClass="slider__btn"
                                  capacityCount={120}
                                />
                              </h4>
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                        <div className="sliderBtn_container">
                          {data.Title && data.Title.trim() ? (
                            <button
                              className="sliderBtn sliderBtn_heading youtube-btn_display"
                              onClick={() => {
                                const slider__para =
                                  document.querySelector("#neotronic_title");
                                if (slider__para.classList.contains("d-none")) {
                                  slider__para.classList.remove("d-none");
                                } else {
                                  slider__para.classList.add("d-none");
                                }
                              }}
                            >
                              <FontAwesomeIcon icon={faHeading} />
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="_username__featuredLink__MeYB7">
                          <div className="BaseEmbeddedLink_baseEmbeddedLinkWrapper__SlpfZ">
                            <div className="BaseEmbeddedLink_baseEmbeddedLink__WXu5a">
                              <div className="BaseEmbeddedLink_baseEmbeddedLinkContainer__SlSm5 BaseEmbeddedLink_baseEmbeddedLinkContainerEmbed__py5x8">
                                <div className="BaseEmbeddedLink_baseEmbeddedLinkItem__EDHSQ BaseEmbeddedLink_baseEmbeddedLinkItemVisible__63uQ_">
                                  <ReactPlayer
                                    url={`https://www.youtube.com/embed/${url}?showinfo=0&amp;modestbranding=1&modestbranding=3&controls=0&rel=1&contore=1`}
                                    light={true}
                                    width="100%"
                                    playing={true}
                                    className="EmbeddedYouTube_embeddedYouTube__kZebg EmbeddedYouTube_featuredLinkEmbeddedVideo__GERzu reactYoutube"
                                    height="100%"
                                    onClickPreview={() => {
                                      const youtubeText_display =
                                        document.querySelector(
                                          ".youtube-text_display"
                                        );
                                      youtubeText_display.classList.add(
                                        "d-none"
                                      );
                                    }}
                                    controls
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    </div>
                  ) : (
                    <>
                      {" "}
                      <div className="_username__featuredLink__MeYB7">
                        <div className="BaseEmbeddedLink_baseEmbeddedLinkWrapper__SlpfZ">
                          <div className="BaseEmbeddedLink_baseEmbeddedLink__WXu5a">
                            <div className="BaseEmbeddedLink_baseEmbeddedLinkContainer__SlSm5 BaseEmbeddedLink_baseEmbeddedLinkContainerEmbed__py5x8">
                              <div className="BaseEmbeddedLink_baseEmbeddedLinkItem__EDHSQ BaseEmbeddedLink_baseEmbeddedLinkItemVisible__63uQ_">
                                <div className="EmbeddedYouTube_embeddedYouTube__kZebg EmbeddedYouTube_featuredLinkEmbeddedVideo__GERzu">
                                  <div>
                                    <iframe
                                      className="EmbeddedYouTube_embeddedVideoIframe__BnmH8"
                                      src={`https://www.youtube.com/embed/${url}?showinfo=0&amp;modestbranding=1&modestbranding=3&controls=0&rel=1&contore=1`}
                                      allowFullScreen
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {data.Title.trim() ? (
                        <>
                          <div className="swiper-content border-none round-0">
                            <p className="slider_bottom-para" id="slider__para">
                              <TextLoader
                                text={data.Title}
                                id="slider__para"
                                characterNumber="95"
                                btnClass="slider__btn"
                              />
                            </p>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </CSSTransition>
      ) : (
        <CSSTransition
          in={true}
          appear={true}
          timeout={600}
          className={"video_height_up"}
        >
          <div className="">
            {theme === "neotronic" || theme === "essence" ? (
              <div className="mt-4 h-100 overflow-hidden youtube slider p-relative">
                <>
                  {data.Title.trim() ? (
                    <>
                      <div className="swiper-content border-none round-0 youtube-text_display">
                        <h4
                          className="slider_bottom-para d-none"
                          id="neotronic_title"
                        >
                          <TextLoader
                            text={data.Title}
                            id="neotronic_title"
                            characterNumber="50"
                            btnClass="slider__btn"
                            capacityCount={120}
                          />
                        </h4>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className="sliderBtn_container">
                    {data.Title && data.Title.trim() ? (
                      <button
                        className="sliderBtn sliderBtn_heading youtube-btn_display"
                        onClick={() => {
                          const slider__para =
                            document.querySelector("#neotronic_title");
                          if (slider__para.classList.contains("d-none")) {
                            slider__para.classList.remove("d-none");
                          } else {
                            slider__para.classList.add("d-none");
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faHeading} />
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="_username__featuredLink__MeYB7">
                    <div className="BaseEmbeddedLink_baseEmbeddedLinkWrapper__SlpfZ">
                      <div className="BaseEmbeddedLink_baseEmbeddedLink__WXu5a">
                        <div className="BaseEmbeddedLink_baseEmbeddedLinkContainer__SlSm5 BaseEmbeddedLink_baseEmbeddedLinkContainerEmbed__py5x8">
                          <div className="BaseEmbeddedLink_baseEmbeddedLinkItem__EDHSQ BaseEmbeddedLink_baseEmbeddedLinkItemVisible__63uQ_">
                            <ReactPlayer
                              url={`https://www.youtube.com/embed/${url}?showinfo=0&amp;modestbranding=1&modestbranding=3&controls=0&rel=1&contore=1`}
                              light={true}
                              width="100%"
                              playing={true}
                              className="EmbeddedYouTube_embeddedYouTube__kZebg EmbeddedYouTube_featuredLinkEmbeddedVideo__GERzu reactYoutube"
                              height="100%"
                              onClickPreview={() => {
                                if (theme === "neotronic") {
                                  const youtubeText_display =
                                    document.querySelector(
                                      ".youtube-text_display"
                                    );
                                  const youtubeBtn_display =
                                    document.querySelector(
                                      ".youtube-btn_display"
                                    );

                                  youtubeText_display.classList.add("d-none");
                                  youtubeBtn_display.classList.add("d-none");
                                }
                              }}
                              controls
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            ) : (
              <div className="mt-4 h-100 overflow-hidden youtube slider">
                {theme === "riorpad" || theme === "buwayne" ? (
                  <>
                    <NeumorphicContainer
                      containerclassName="round-25"
                      subcontainerclasses="border-none mt-0 p-1 round-25 w-100 justify-content-center"
                    >
                      <div className="_username__featuredLink__MeYB7">
                        <div className="BaseEmbeddedLink_baseEmbeddedLinkWrapper__SlpfZ">
                          <div className="BaseEmbeddedLink_baseEmbeddedLink__WXu5a">
                            <div className="BaseEmbeddedLink_baseEmbeddedLinkContainer__SlSm5 BaseEmbeddedLink_baseEmbeddedLinkContainerEmbed__py5x8">
                              <div className="BaseEmbeddedLink_baseEmbeddedLinkItem__EDHSQ BaseEmbeddedLink_baseEmbeddedLinkItemVisible__63uQ_">
                                <div className="EmbeddedYouTube_embeddedYouTube__kZebg EmbeddedYouTube_featuredLinkEmbeddedVideo__GERzu">
                                  <div>
                                    <iframe
                                      className="EmbeddedYouTube_embeddedVideoIframe__BnmH8"
                                      src={`https://www.youtube.com/embed/${url}?showinfo=0&amp;modestbranding=1&modestbranding=3&controls=0&rel=1&height="250"`}
                                      allowFullScreen
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NeumorphicContainer>
                    <div className="d-flex justify-content-center mt-2">
                      {!isClosed && data.Title ? (
                        <CloseBtn
                          linkHandler={linkHandler}
                          mode="neuMorphism"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    {data.Title.trim() ? (
                      <>
                        {isClosed && data.Title ? (
                          <div className="swiper-content border-none round-0">
                            <p className="slider_bottom-para" id="slider__para">
                              <TextLoader
                                text={data.Title}
                                id="slider__para"
                                characterNumber="95"
                                btnClass="slider__btn"
                              />
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                      </>
                    ) : (
                      ""
                    )}
                    <div className="_username__featuredLink__MeYB7">
                      <div className="BaseEmbeddedLink_baseEmbeddedLinkWrapper__SlpfZ">
                        <div className="BaseEmbeddedLink_baseEmbeddedLink__WXu5a">
                          <div className="BaseEmbeddedLink_baseEmbeddedLinkContainer__SlSm5 BaseEmbeddedLink_baseEmbeddedLinkContainerEmbed__py5x8">
                            <div className="BaseEmbeddedLink_baseEmbeddedLinkItem__EDHSQ BaseEmbeddedLink_baseEmbeddedLinkItemVisible__63uQ_">
                              <div className="EmbeddedYouTube_embeddedYouTube__kZebg EmbeddedYouTube_featuredLinkEmbeddedVideo__GERzu">
                                <div>
                                  <iframe
                                    className="EmbeddedYouTube_embeddedVideoIframe__BnmH8"
                                    src={`https://www.youtube.com/embed/${url}?showinfo=0&amp;modestbranding=1&modestbranding=3&controls=0&rel=1&contore=1`}
                                    allowFullScreen
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {!isClosed && data.Title ? (
                      <CloseBtn linkHandler={linkHandler} />
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </CSSTransition>
      )}
    </>
  );
}
