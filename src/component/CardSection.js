import React, { useState } from "react";
import Card from "./Links/Card";
import Video from "./Links/Video";
import Slider from "./Links/Slider";
import Documents from "./Links/Documents";
import CardLinks from "./Links/CardLinks";

export default function CardSection({ modeData, theme, heroData, mode }) {
  const [documentsIsTrue, setDocumentsIsTrue] = useState(true);
  const [videoIsTrue, setVideoIsTrue] = useState(true);
  const [sliderIsTrue, setSliderIsTrue] = useState(true);

  const linkHandler = (value, event) => {
    if (!event.target.classList.contains("extra-btn")) {
      if (value === "document") {
        setDocumentsIsTrue(!documentsIsTrue);
      }
      if (value === "video") {
        setVideoIsTrue(!videoIsTrue);
      }
      if (value === "slider") {
        setSliderIsTrue(!sliderIsTrue);
      }
    }
  };

  const StandardLinks = JSON.parse(modeData.StandardLinks.Links);
  const CustomLinks = JSON.parse(modeData.CustomLinks.Links);
  const slider = JSON.parse(modeData.Slider.Links);
  let isSliderValueTrue = false;
  for (const slidertest of slider) {
    if (slidertest.isActive) {
      isSliderValueTrue = slidertest.isActive;
    }
  }

  return (
    <>
      <section className="card-section ">
        <div className="container d-flex flex-direction-column z-1">
          {mode === "direct" ? (
            <>
              {isSliderValueTrue ? (
                <Slider
                  data={JSON.parse(modeData.Slider.Links)}
                  linkHandler={linkHandler.bind(this, "slider")}
                  theme={theme}
                  mode={mode}
                />
              ) : (
                ""
              )}

              {modeData.Document.URL && modeData.Document.isActive ? (
                <Documents
                  data={modeData.Document}
                  linkHandler={linkHandler.bind(this, "document")}
                  theme={theme}
                  mode={mode}
                />
              ) : (
                ""
              )}

              {modeData.FeaturedVideo && modeData.FeaturedVideo.isActive ? (
                <Video
                  data={modeData.FeaturedVideo}
                  linkHandler={linkHandler.bind(this, "video")}
                  theme={theme}
                  mode={mode}
                />
              ) : (
                ""
              )}
            </>
          ) : (
            <>
              <div className={`order-${modeData.StandardLinks.Order + 1} z-1`}>
                {StandardLinks.length ? (
                  <>
                    <Card
                      StandardLinks={StandardLinks}
                      theme={theme}
                      heroData={heroData}
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className={`order-${modeData.CustomLinks.Order + 1} z-1`}>
                {CustomLinks.length ? (
                  <>
                    <Card CustomLinks={CustomLinks} theme={theme} />
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className={`order-${modeData.Slider.Order + 1} z-1`}>
                {isSliderValueTrue ? (
                  <>
                    {modeData.Slider.Links &&
                    modeData.Slider.isActive &&
                    slider[0].Title &&
                    (theme === "buwayne" ||
                      theme === "shencho" ||
                      theme === "consmy" ||
                      theme === "riorpad") ? (
                      <>
                        {JSON.parse(modeData.Slider.Links).length &&
                        JSON.parse(modeData.Slider.isActive) ? (
                          <>
                            {sliderIsTrue ? (
                              <CardLinks
                                title={
                                  JSON.parse(modeData.Slider.Links)[0].Title
                                }
                                linkHandler={linkHandler.bind(this, "slider")}
                                mode={theme}
                              />
                            ) : (
                              <Slider
                                data={JSON.parse(modeData.Slider.Links)}
                                linkHandler={linkHandler.bind(this, "slider")}
                                theme={theme}
                              />
                            )}
                          </>
                        ) : (
                          ""
                        )}
                      </>
                    ) : (
                      <>
                        {JSON.parse(modeData.Slider.Links).length &&
                        JSON.parse(modeData.Slider.isActive) ? (
                          <>
                            <Slider
                              data={JSON.parse(modeData.Slider.Links)}
                              linkHandler={linkHandler.bind(this, "slider")}
                              isClosed={theme}
                              theme={theme}
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </>
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>

              <div className={`order-${modeData.Document.Order + 1} z-1`}>
                {modeData.Document.URL &&
                modeData.Document.isActive &&
                modeData.Document.Title &&
                (theme === "buwayne" ||
                  theme === "shencho" ||
                  theme === "consmy" ||
                  theme === "riorpad") ? (
                  <>
                    <>
                      {documentsIsTrue ? (
                        <CardLinks
                          title={modeData.Document.Title}
                          linkHandler={linkHandler.bind(this, "document")}
                          mode={theme}
                        />
                      ) : (
                        <Documents
                          data={modeData.Document}
                          linkHandler={linkHandler.bind(this, "document")}
                          theme={theme}
                        />
                      )}
                    </>
                  </>
                ) : (
                  <>
                    {modeData.Document.URL && modeData.Document.isActive ? (
                      <>
                        <Documents
                          data={modeData.Document}
                          linkHandler={linkHandler.bind(this, "document")}
                          isClosed={theme}
                          theme={theme}
                        />
                      </>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
              <div className={`order-${modeData.FeaturedVideo.Order + 1} z-1`}>
                {(modeData.FeaturedVideo &&
                  !modeData.FeaturedVideo.Title &&
                  modeData.FeaturedVideo.isActive) ||
                theme === "phiverse" ||
                theme === "dahwoo" ||
                theme === "etyne" ? (
                  <>
                    {modeData.FeaturedVideo &&
                    modeData.FeaturedVideo.isActive ? (
                      <>
                        <Video
                          data={modeData.FeaturedVideo}
                          linkHandler={linkHandler.bind(this, "video")}
                          isClosed={theme}
                          theme={theme}
                        />
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <>
                    {modeData.FeaturedVideo &&
                    modeData.FeaturedVideo.isActive ? (
                      <>
                        {videoIsTrue ? (
                          <CardLinks
                            title={modeData.FeaturedVideo.Title}
                            linkHandler={linkHandler.bind(this, "video")}
                            mode={theme}
                          />
                        ) : (
                          <Video
                            data={modeData.FeaturedVideo}
                            linkHandler={linkHandler.bind(this, "video")}
                            theme={theme}
                          />
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
