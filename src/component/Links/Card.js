import React from "react";
import NeumorphicContainer from "../NeumorphicContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";
import { faB } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEtsy } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { faKaggle } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faQuora } from "@fortawesome/free-brands-svg-icons";
import { faReddit } from "@fortawesome/free-brands-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { faT } from "@fortawesome/free-solid-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faVimeoV } from "@fortawesome/free-brands-svg-icons";
import { faWeixin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faYelp } from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import TextLoader from "../TextLoader";
export default function Card({ StandardLinks, CustomLinks, theme, heroData }) {
  // social_media if needs
  let classN = "social_media";
  if (theme === "dahwoo" || theme === "etyne") {
    classN =
      "social_media d-flex justify-content-center align-items-center mt-4 gap-2";
  } else if (theme === "neotronic" || theme === "essence") {
    classN = "social_media";
    let filterstanderdLinks;
    if (StandardLinks) {
      filterstanderdLinks = StandardLinks.filter((value) => value.isActive);
    }

    if (
      (theme === "essence" || theme === "neotronic") &&
      filterstanderdLinks &&
      filterstanderdLinks.length < 5
    ) {
      classN = "social_media d-flex justify-content-center";
    }
  }
  return (
    <>
      <div className={theme === "essence" ? "cardItem row" : "cardItem"}>
        <div className={classN}>
          {StandardLinks
            ? StandardLinks.map((value, id) => {
                if (!value.isActive) {
                  return "";
                }

                let link = `${value.URL}`;
                let icon;
                let url = value.Name;
                if (url === "WhatsappGroup") {
                  url = "Whatsapp";
                  icon = faWhatsapp;
                } else if (url === "Messages") {
                  url = "Message";
                  icon = faMessage;
                } else if (url === "Googlemaps") {
                  url = "Google_maps";
                  icon = faLocation;
                } else if (url === "Googlereview") {
                  url = "Google_review";
                  icon = faStar;
                } else if (url === "Youtubemusic") {
                  url = "Youtube_music";
                  icon = faCirclePlay;
                } else if (url === "Viemo") {
                  url = "Vimeo";
                  icon = faVimeoV;
                } else if (url === "Phone") {
                  link = `tel:${value.URL}`;
                  icon = faPhone;
                } else if (url === "Spotify") {
                  link = value.URL.split("user/")[1];
                  icon = faSpotify;
                } else if (url === "Whatsapp") {
                  link = `https://wa.me/${value.URL}`;
                  icon = faWhatsapp;
                } else if (url === "Gmail") {
                  link = `mailto:${value.URL}`;
                  icon = faMailBulk;
                } else if (value.Name === "Applemusic") {
                  icon = faMusic;
                } else if (value.Name === "Appstore") {
                  icon = faAppStore;
                } else if (value.Name === "Behance") {
                  icon = faBehance;
                } else if (value.Name === "Blogspot") {
                  icon = faBlogger;
                } else if (value.Name === "Booksy") {
                  icon = faB;
                } else if (value.Name === "Buymeacoffee") {
                  icon = faCoffee;
                } else if (value.Name === "Calendly") {
                  icon = faCalendar;
                } else if (value.Name === "CashApp") {
                  icon = faDollar;
                } else if (value.Name === "Instagram") {
                  icon = faInstagram;
                } else if (value.Name === "Airbnb") {
                  icon = faAirbnb;
                } else if (value.Name === "Contacts") {
                  icon = faAddressBook;
                } else if (value.Name === "Discord") {
                  icon = faDiscord;
                } else if (value.Name === "Email") {
                  icon = faEnvelope;
                } else if (value.Name === "Etsy") {
                  icon = faEtsy;
                } else if (value.Name === "Facebook") {
                  icon = faFacebook;
                } else if (value.Name === "Facetime") {
                  icon = faCamera;
                } else if (value.Name === "Freelancer") {
                  icon = faDove;
                } else if (value.Name === "Github") {
                  icon = faGithub;
                } else if (value.Name === "Googleplay") {
                  icon = faGooglePlay;
                } else if (value.Name === "Indiamart") {
                  icon = faM;
                } else if (value.Name === "Kaggle") {
                  icon = faKaggle;
                } else if (value.Name === "Linkedin") {
                  icon = faLinkedinIn;
                } else if (value.Name === "Medium") {
                  icon = faMedium;
                } else if (value.Name === "Opensea") {
                  icon = faShip;
                } else if (value.Name === "Outlook") {
                  icon = faEnvelopeOpenText;
                } else if (value.Name === "Paypal") {
                  icon = faPaypal;
                } else if (value.Name === "Paytm") {
                  icon = faWallet;
                } else if (value.Name === "Pinterest") {
                  icon = faPinterest;
                } else if (value.Name === "Quora") {
                  icon = faQuora;
                } else if (value.Name === "Reddit") {
                  icon = faReddit;
                } else if (value.Name === "Shopify") {
                  icon = faShopify;
                } else if (value.Name === "Signal") {
                  icon = faComment;
                } else if (value.Name === "Skype") {
                  icon = faSkype;
                } else if (value.Name === "Snapchat") {
                  icon = faSnapchat;
                } else if (value.Name === "Soundcloud") {
                  icon = faSoundcloud;
                } else if (value.Name === "Stackoverflow") {
                  icon = faLayerGroup;
                } else if (value.Name === "Telegram") {
                  icon = faPaperPlane;
                } else if (value.Name === "Tinder") {
                  icon = faFireFlameCurved;
                } else if (value.Name === "tumblr") {
                  icon = faT;
                } else if (value.Name === "Twitch") {
                  icon = faTwitch;
                } else if (value.Name === "Twitter") {
                  icon = faTwitter;
                } else if (value.Name === "Wechat") {
                  icon = faWeixin;
                } else if (value.Name === "Yelp") {
                  icon = faYelp;
                } else if (value.Name === "Youtube") {
                  icon = faYoutube;
                } else if (value.Name === "Website") {
                  icon = faSafari;
                }

                if (theme === "riorpad" || theme === "buwayne") {
                  return (
                    <a
                      key={id}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-100"
                    >
                      <NeumorphicContainer
                        containerclassName="mt-4 round-10 d-flex"
                        subcontainerclasses="card border-none mt-0 round-10 w-100"
                        isLayer={false}
                      >
                        <NeumorphicContainer
                          containerclassName="p-2px card_icon round-10"
                          subcontainerclasses="round-10 d-flex p-2 icon"
                          isLayer={false}
                        >
                          {icon ? (
                            <FontAwesomeIcon icon={icon} />
                          ) : (
                            <img
                              className="img-fluid"
                              src={`/social_icon/${url.toLowerCase()}.svg`}
                              alt=""
                            />
                          )}
                        </NeumorphicContainer>

                        <p>{value.Title ? value.Title : value.Name}</p>
                      </NeumorphicContainer>
                    </a>
                  );
                }
                if (
                  theme === "dahwoo" ||
                  theme === "etyne" ||
                  theme === "neotronic" ||
                  theme === "essence"
                ) {
                  return (
                    <a
                      key={id}
                      href={link}
                      className={
                        theme === "dahwoo"
                          ? "theme_dahwoo-card"
                          : "neotronicIcon social_media-icon"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon ? (
                        <FontAwesomeIcon icon={icon} />
                      ) : (
                        <img
                          className="img-fluid"
                          src={`/social_icon/${url.toLowerCase()}.svg`}
                          alt=""
                        />
                      )}
                    </a>
                  );
                }

                return (
                  <a
                    className="card w-100"
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card_icon bg-bannner">
                      <img
                        className="img-fluid"
                        src={`/social_icon/${url.toLowerCase()}.svg`}
                        alt=""
                      />
                    </div>

                    <p>{value.Title ? value.Title : value.Name}</p>
                  </a>
                );
              })
            : ""}
        </div>

        {heroData ? (
          <div className="hero">
            <div className="hero-detail">
              <pre id="hero__para">
                <TextLoader
                  text={heroData}
                  id="hero__para"
                  characterNumber="200"
                  btnClass="hero__btn"
                />
              </pre>
            </div>
          </div>
        ) : (
          ""
        )}
        {CustomLinks
          ? CustomLinks.map((value, id) => {
              if (!value.isActive) {
                return "";
              }
              if (theme === "riorpad" || theme === "buwayne") {
                return (
                  <a
                    key={id}
                    href={value.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-100"
                  >
                    <NeumorphicContainer
                      containerclassName="mt-4 round-10 d-flex"
                      subcontainerclasses={`border-none mt-0 round-10 w-100 ${
                        value.IconUrl === null
                          ? "customLinkCard"
                          : "card cardItem"
                      } `}
                      isLayer={false}
                    >
                      {!(value.IconUrl === null) ? (
                        <NeumorphicContainer
                          containerclassName="p-2px card_icon round-10"
                          subcontainerclasses="round-10 d-flex p-2 icon"
                          isLayer={false}
                        >
                          <img
                            className="img-fluid"
                            src={value.IconUrl}
                            alt=""
                          />
                        </NeumorphicContainer>
                      ) : (
                        ""
                      )}
                      <p>{value.Title ? value.Title : value.Name}</p>
                    </NeumorphicContainer>
                  </a>
                );
              }
              if (theme === "essence") {
                return (
                  <a
                    key={id}
                    href={value.URL}
                    className={
                      value.Title
                        ? "col-6 d-flex flex-direction-column customLinkCard"
                        : "col-6 d-flex flex-direction-column customLinkCard justify-content-end"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {value.Title ? (
                      <div className="customCard_dahwoo-bottom mb-2">
                        <p>{value.Title ? value.Title : value.Name}</p>
                      </div>
                    ) : (
                      ""
                    )}
                    <img className="img-fluid" src={value.IconUrl} alt="" />
                  </a>
                );
              }
              if (theme === "neotronic") {
                return (
                  <a
                    key={id}
                    href={value.URL}
                    className={
                      value.IconUrl === null ? "card" : "card cardPadding w-100"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {!(value.IconUrl === null) ? (
                      <div className="card_icon bg-bannner">
                        <img className="img-fluid" src={value.IconUrl} alt="" />
                      </div>
                    ) : (
                      ""
                    )}
                    <p>{value.Title ? value.Title : value.Name}</p>
                  </a>
                );
              }
              if (
                (theme === "dahwoo" && !(value.IconUrl === null)) ||
                !value.Title
              ) {
                return (
                  <div className="mt-4">
                    <a
                      key={id}
                      href={value.URL}
                      className="customCard_dahwoo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="img-fluid" src={value.IconUrl} alt="" />
                      {value.Title ? (
                        <div className="customCard_dahwoo-bottom">
                          <p>{value.Title ? value.Title : value.Name}</p>
                          <FontAwesomeIcon icon={faLink} />
                        </div>
                      ) : (
                        ""
                      )}
                    </a>
                  </div>
                );
              }
              return (
                <a
                  key={id}
                  href={value.URL}
                  className={
                    value.IconUrl === null ? "card" : "card cardPadding"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {!(value.IconUrl === null) ? (
                    <div className="card_icon bg-bannner">
                      <img className="img-fluid" src={value.IconUrl} alt="" />
                    </div>
                  ) : (
                    ""
                  )}
                  <p>{value.Title ? value.Title : value.Name}</p>
                </a>
              );
            })
          : ""}
      </div>
    </>
  );
}
