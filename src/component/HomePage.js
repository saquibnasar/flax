// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import Bird from "./Bird_flight_animation";
// import boat from "../assets/images/boat.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

// import logo from "../assets/images/footerImage_dark.svg";
// import trustpilot from "../assets/images/trustpilot.svg";
// import Group from "../assets/images/Group 8938.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// export function Controls() {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();

//   return <orbitControls args={[camera, domElement]} />;
// }

export default function HomePage() {
  window.addEventListener("click", function (e) {
    const flax_link = document.querySelector(".flax_link");
    if (document.querySelector(".menuItem").contains(e.target)) {
      if (flax_link.classList.contains("d-none")) {
        flax_link.classList.remove("d-none");
      } else {
        flax_link.classList.add("d-none");
      }
    } else if (!document.querySelector(".flax_link").contains(e.target)) {
      if (!flax_link.classList.contains("d-none")) {
        flax_link.classList.add("d-none");
      }
    }
  });

  const textLoader = (phase) => {
    let homePage_title;
    setInterval(() => {
      homePage_title = document.querySelector("#homePage_title");
    }, 1);
    setTimeout(() => {
      homePage_title.innerHTML = `Flax <span> one-</span>
    <span>stop</span>
    <span>-shop</span> <span> for</span> <span> a</span>
    <span> seamless</span> <span> online</span> <span> presence.</span>`;
    }, 0);

    setTimeout(() => {
      homePage_title.innerHTML = `Flax <span> Connect </span>
      <span>your </span>
      <span>audience </span> <span> to </span> <span> everything </span>
      <span> you </span> <span> offer</span>`;
    }, 3000);

    setTimeout(() => {
      homePage_title.innerHTML = `Flax <span> Create </span>
      <span>a</span>
      <span>stunning </span> <span> landing </span> <span> page </span>
      <span> in </span> <span> minutes.</span>`;
    }, 6000);

    setTimeout(() => {
      homePage_title.innerHTML = `Flax <span> Simplify </span>
      <span>your  </span>
      <span>social </span> <span> media </span> <span> sharing </span>
      <span> and </span> <span> grow </span> <span> your </span> <span> following </span>`;
    }, 9000);
    setTimeout(() => {
      homePage_title.innerHTML = `Flax <span> Showcase </span>
      <span>your </span>
      <span>online </span> <span> assets </span> <span> like </span>
      <span> a</span> <span> pro.</span>`;
    }, 12000);
    setTimeout(() => {
      homePage_title.innerHTML = `Flax <span> the </span>
      <span>easiest </span>
      <span>way </span> <span> to </span> <span> connect </span>
      <span> your </span> <span> audience </span> <span> to </span>
      <span> all </span>
      <span> your </span>
      <span> digital </span>
      <span> content. </span>`;
    }, 15000);
  };

  setTimeout(textLoader, 500);
  setInterval(textLoader, 18000);
  return (
    <>
      {/* 
        <div
          style={{
            width: "152px",
            height: "77px",
            position: "absolute",
            top: "14%",
            left: "33%",
          }}
        >
          <Canvas>
            <ambientLight />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-3, -3, 2]} />
            {/* <Controls /> */}
      {/* <Bird /> */}
      {/* <OrbitControls /> */}
      {/* </Canvas> */}
      {/* </div>  */}
      <section className="homePage ">
        <div className="d-flex justify-content-between align-items-center">
          <a href="https://www.flaxapp.co/" target="blank" className="logo">
            <svg
              width="84"
              height="32"
              viewBox="0 0 84 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1237_33)">
                <path
                  d="M1.89453 25.6V6.37341H14.2116V9.29307H5.37747V14.5128H13.3667V17.4324H5.37747V25.6H1.89453ZM20.633 6.37341V25.6H17.2345V6.37341H20.633ZM28.2772 25.891C27.3634 25.891 26.5404 25.7283 25.8081 25.4029C25.0821 25.0712 24.5063 24.583 24.0808 23.9384C23.6614 23.2937 23.4518 22.4989 23.4518 21.5538C23.4518 20.7402 23.602 20.0674 23.9024 19.5354C24.2028 19.0034 24.6128 18.5778 25.1322 18.2586C25.6517 17.9394 26.2369 17.6984 26.8878 17.5357C27.5449 17.3667 28.224 17.2447 28.925 17.1696C29.7699 17.082 30.4552 17.0037 30.9809 16.9349C31.5067 16.8598 31.8884 16.7471 32.1263 16.5969C32.3704 16.4404 32.4924 16.1995 32.4924 15.8741V15.8177C32.4924 15.1105 32.2827 14.5629 31.8634 14.1748C31.4441 13.7868 30.8401 13.5928 30.0515 13.5928C29.2191 13.5928 28.5588 13.7743 28.0706 14.1373C27.5887 14.5003 27.2633 14.929 27.0943 15.4234L23.9211 14.9728C24.1715 14.0966 24.5846 13.3643 25.1604 12.776C25.7362 12.1814 26.4403 11.7371 27.2727 11.4429C28.1051 11.1425 29.0251 10.9923 30.0328 10.9923C30.7274 10.9923 31.4191 11.0736 32.1075 11.2364C32.7959 11.3991 33.4249 11.6682 33.9945 12.0437C34.564 12.413 35.0209 12.9168 35.3651 13.5552C35.7156 14.1936 35.8909 14.9916 35.8909 15.9492V25.6H32.6238V23.6192H32.5112C32.3046 24.0197 32.0136 24.3952 31.6381 24.7457C31.2688 25.0899 30.8026 25.3684 30.2393 25.5812C29.6823 25.7878 29.0282 25.891 28.2772 25.891ZM29.1596 23.3939C29.8419 23.3939 30.4333 23.2593 30.934 22.9902C31.4347 22.7148 31.8196 22.3518 32.0887 21.9011C32.3641 21.4505 32.5018 20.9592 32.5018 20.4272V18.728C32.3954 18.8156 32.2139 18.897 31.9573 18.9721C31.7069 19.0472 31.4253 19.1129 31.1124 19.1692C30.7994 19.2256 30.4896 19.2756 30.1829 19.3194C29.8763 19.3632 29.6103 19.4008 29.385 19.4321C28.878 19.5009 28.4243 19.6136 28.0237 19.7701C27.6231 19.9265 27.3071 20.1456 27.0755 20.4272C26.8439 20.7026 26.7282 21.0594 26.7282 21.4974C26.7282 22.1233 26.9566 22.5959 27.4135 22.915C27.8704 23.2342 28.4524 23.3939 29.1596 23.3939ZM42.0868 11.1801L44.9973 16.5031L47.9543 11.1801H51.55L47.2034 18.39L51.6253 25.6H48.0484L44.9973 20.4084L41.9743 25.6H38.3693L42.7628 18.39L38.4819 11.1801H42.0868Z"
                  fill="black"
                ></path>
                <path
                  d="M55.9258 4.5353C55.9258 3.44033 56.8364 2.55164 57.9596 2.55164H81.409C82.5326 2.55164 83.4428 3.44033 83.4428 4.5353V28.2598C83.4428 29.3552 82.5326 30.2431 81.409 30.2431H57.9596C56.8364 30.2431 55.9258 29.3552 55.9258 28.2602V4.53492V4.5353Z"
                  fill="#318BFD"
                ></path>
                <path
                  d="M64.7509 25.891C63.8373 25.891 63.0141 25.7282 62.2821 25.4028C61.5559 25.0711 60.9803 24.5829 60.5545 23.9383C60.1354 23.2937 59.9258 22.4988 59.9258 21.5537C59.9258 20.7401 60.076 20.0673 60.3763 19.5353C60.6766 19.0033 61.0866 18.5777 61.6061 18.2585C62.1256 17.9394 62.7108 17.6984 63.3617 17.5357C64.0189 17.3667 64.6978 17.2447 65.3988 17.1695C66.2438 17.0819 66.929 17.0037 67.4548 16.9348C67.9806 16.8597 68.3621 16.7471 68.6001 16.5969C68.8444 16.4404 68.9661 16.1995 68.9661 15.874V15.8177C68.9661 15.1105 68.7565 14.5628 68.3374 14.1748C67.9178 13.7867 67.3138 13.5927 66.5253 13.5927C65.6929 13.5927 65.0328 13.7742 64.5447 14.1372C64.0624 14.5002 63.7369 14.929 63.5679 15.4234L60.3951 14.9728C60.6453 14.0965 61.0585 13.3643 61.6341 12.776C62.2101 12.1814 62.9141 11.737 63.7465 11.4429C64.579 11.1425 65.4988 10.9923 66.5065 10.9923C67.2013 10.9923 67.8927 11.0736 68.5813 11.2363C69.2698 11.3991 69.8989 11.6682 70.4682 12.0437C71.0379 12.413 71.4947 12.9168 71.839 13.5552C72.1895 14.1935 72.3648 14.9915 72.3648 15.9491V25.5999H69.0979V23.6191H68.9849C68.7783 24.0197 68.4876 24.3952 68.1119 24.7457C67.7426 25.0899 67.2766 25.3684 66.7131 25.5812C66.1559 25.7877 65.5021 25.891 64.7509 25.891ZM65.6335 23.3938C66.3157 23.3938 66.9072 23.2592 67.4079 22.9901C67.9086 22.7147 68.2935 22.3517 68.5624 21.9011C68.8381 21.4505 68.9757 20.9592 68.9757 20.4272V18.728C68.869 18.8156 68.6875 18.8969 68.4311 18.972C68.1809 19.0472 67.899 19.1129 67.5861 19.1692C67.2732 19.2255 66.9633 19.2756 66.6567 19.3194C66.35 19.3632 66.084 19.4007 65.859 19.432C65.352 19.5009 64.8981 19.6135 64.4974 19.77C64.0971 19.9265 63.7808 20.1455 63.5495 20.4272C63.3178 20.7025 63.2019 21.0593 63.2019 21.4974C63.2019 22.1232 63.4303 22.5958 63.8875 22.915C64.3443 23.2342 64.9261 23.3938 65.6335 23.3938ZM75.7819 25.5999V11.18H79.1801V25.5999H75.7819ZM77.4906 9.13346C76.9523 9.13346 76.4892 8.95505 76.101 8.59833C75.7129 8.23533 75.5192 7.80034 75.5192 7.2934C75.5192 6.78019 75.7129 6.3452 76.101 5.98847C76.4892 5.62547 76.9523 5.44397 77.4906 5.44397C78.0348 5.44397 78.4983 5.62547 78.8798 5.98847C79.268 6.3452 79.4621 6.78019 79.4621 7.2934C79.4621 7.80034 79.268 8.23533 78.8798 8.59833C78.4983 8.95505 78.0348 9.13346 77.4906 9.13346Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1237_33">
                  <rect width="83.451" height="32" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <button className="menuItem">
            <svg class focusable="false" viewBox="0 0 24 24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
          </button>
          <div className="flax_link d-none">
            <a
              href="https://apps.apple.com/in/app/caard-digital-business-card/id1626948504"
              target="blank"
            >
              <FontAwesomeIcon icon={faApple} />
              Ios App
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.caard.caard_frontend_final"
              target="blank"
            >
              <FontAwesomeIcon icon={faGooglePlay} />
              Play Store
            </a>
            <a href="https://caard.mini.store/" target="blank">
              <FontAwesomeIcon icon={faCartShopping} />
              Card
            </a>
            <a href="https://www.instagram.com/getflaxapp/" target="blank">
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </a>
            <a href="https://twitter.com/Flaxai" target="blank">
              <FontAwesomeIcon icon={faTwitter} />
              Twitter
            </a>
            <a href="https://www.linkedin.com/company/flax-ai/" target="blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
              Linkedin
            </a>
            <a href="mailto:support@flax.ai" target="blank">
              <FontAwesomeIcon icon={faEnvelope} />
              Support
            </a>
            <a href="https://wa.me/+918171698717" target="blank">
              <FontAwesomeIcon icon={faWhatsapp} />
              Whatsapp
            </a>
            <a href="tel:+918171698717" target="blank">
              <FontAwesomeIcon icon={faPhone} />
              Call Now
            </a>
          </div>
        </div>

        <div className="homePage_container">
          {/* Your one-stop-shop for a seamless online presence. */}
          <h1 id="homePage_title">
            Flax <span> one-</span>
            <span>stop</span>
            <span>-shop</span> <span> for</span> <span> a</span>
            <span> seamless</span> <span> online</span> <span> presence.</span>
          </h1>
          <p>
            Introducing Flax: a platform designed to empower your creativity,
            enhance your digital footprint, and transform your ideas into
            reality. With Flax, you can easily craft stunning mini-websites that
            capture your unique brand and style, and showcase your content and
            passions to the world. Let Flax help you unleash your imagination
            and elevate your online presence with its innovative tools and
            features. Get started today and discover the limitless possibilities
            of Flax.
          </p>
          <h3>
            Flax is currently accessible globally. Stay tuned for updates!
          </h3>
        </div>
        <Footer />
      </section>

      {/* <section className="homePage d-flex flex-direction-column justify-content-center align-items-start">
        <svg
          width="203"
          height="348"
          viewBox="0 0 203 348"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            bottom: "-11%",
            right: "13%",
            transform: "scale(0.6)",
          }}
        >
          <path
            d="M40.7406 165.585C39.5771 166.1 36.038 168.175 31.687 167.475C28.7176 166.997 43.1888 173.476 42.5293 172.991C34.3473 166.972 18.8225 191.988 0.154488 197.634C0.622078 196.784 -0.146328 197.747 0.154488 197.634C1.2217 198.299 0.401532 196.752 0.154488 197.634C0.506741 196.784 1.03652 198.26 0.154488 197.634C1.17242 196.612 0.0959426 197.764 0.154488 197.634C-0.313103 198.483 2.0971 196.611 0.154488 197.634C-0.0912532 197.707 -0.00845678 197.287 0.154488 197.634C0.000361934 197.559 3.31036 196.286 0.154488 197.634C4.47024 199.735 7.25091 200.42 15.7939 202.706C49.0624 211.608 49.9499 212.738 55.8626 212.314C58.4495 212.128 76.8103 210.811 80.1847 201.565C85.4651 187.096 51.2242 160.944 40.7406 165.585Z"
            fill="#302742"
          />
          <path
            d="M44.0245 312.265L38.9736 282.109L55.0557 280.04L62.6523 305.276L54.6139 319.06L44.0245 312.265Z"
            fill="#FFB6B6"
          />
          <path
            d="M85.6969 189.735C85.0286 190.803 83.2867 194.472 79.286 196.292C76.5557 197.534 74.0172 197.349 73.1941 197.312C62.9827 196.844 39.411 206.331 27.1921 221.298C24.425 224.688 23.1143 227.288 22.6583 230.182C22.0118 234.286 23.3806 237.099 25.8457 244.679C27.194 248.826 28.2109 253.071 29.5222 257.229C37.1994 281.572 35.0563 287.15 40.8 290.57C47.1726 294.364 57.5883 292.127 60.0852 287.444C61.1077 285.526 60.387 283.977 59.6404 279.889C57.4515 267.902 60.8821 266.074 58.9326 257.258C56.6564 246.964 50.7339 243.819 52.7193 240.74C54.5604 237.885 60.0076 240.041 70.4372 238.638C75.2096 237.997 77.9022 237.03 86.2781 234.21C118.896 223.227 120.276 223.673 124.926 220.061C126.961 218.481 141.882 207.129 138.906 197.752C125.257 154.747 91.7184 180.113 85.6969 189.735Z"
            fill="#302742"
          />
          <path
            d="M53.7594 309.931C52.2335 310.779 50.4494 311.77 48.5374 311.123C47.2437 310.685 46.0847 309.562 45.6863 308.248C45.2266 306.733 45.9415 305.497 45.724 305.411C45.3928 305.28 43.4888 308.047 42.3414 311.766C42.1249 312.468 41.1746 315.669 41.3229 320.722C41.4418 324.77 42.1107 324.719 42.0821 327.183C41.9942 334.746 35.6668 337.33 37.0546 342.459C37.5901 344.438 39.1193 346.222 40.9483 346.873C44.6213 348.179 48.8408 344.681 51.1155 342.746C56.5939 338.087 58.7082 333.092 61.2588 328.125C69.9328 311.232 78.604 304.482 75.9047 300.792C75.3939 300.093 75.1908 300.482 69.3989 298.085C63.6824 295.719 62.3758 294.717 61.2573 295.41C59.5736 296.454 61.5013 299.363 59.6478 303.716C58.0052 307.573 54.7481 309.382 53.7594 309.931Z"
            fill="#302742"
          />
          <path
            d="M100.741 46.2871L78.3052 44.7131L71.3609 55.731L50.5277 61.5023L58.2734 114.755L52.522 171.436C52.522 171.436 79.9078 190.044 82.0445 198.439C84.1813 206.834 136.531 190.045 136.531 190.045L118.636 135.742L120.239 93.2444L125.046 68.5852L103.145 58.6167L100.741 46.2871Z"
            fill="#3F3D56"
          />
          <path
            d="M110.891 62.027C110.891 62.027 128.77 61.7647 131.182 69.11C133.594 76.4553 141.607 127.347 141.607 127.347L147.75 149.646L120.24 136.267L126.116 127.362L106.885 91.1458L110.891 62.027Z"
            fill="#3F3D56"
          />
          <path
            d="M99.9538 143.612C96.9977 143.615 94.2495 141.942 93.1003 139.267C92.2311 137.244 92.313 135.303 92.9634 133.639C92.7541 133.554 92.5466 133.465 92.3323 133.39C92.6471 133.264 92.9531 133.123 93.2588 132.981C94.3237 130.896 96.3652 129.384 98.7968 129.016C101.809 125.847 103.66 121.601 103.68 116.928C103.719 107.297 95.7648 99.252 85.9615 99.021C85.8844 99.0191 85.8073 99.0178 85.7303 99.0169C81.3405 98.9673 77.3584 101.379 75.1342 105.097C73.8365 107.266 71.4383 108.722 68.6907 108.722C66.5872 108.722 64.6896 107.868 63.3332 106.494C60.3779 103.501 56.6774 101.273 52.4895 100.59C49.7393 100.141 46.8929 99.9719 43.9806 100.114C24.0448 101.087 6.89321 118.441 6.46747 138.042C5.9933 159.872 23.869 177.715 45.9879 177.715C57.497 177.715 67.8524 172.881 75.0743 165.17C78.2806 161.746 82.7736 159.828 87.5094 159.876C87.5576 159.876 87.6059 159.877 87.6542 159.877C95.3247 159.877 101.543 153.769 101.543 146.235C101.543 145.817 101.522 145.405 101.482 144.997C101.408 144.235 100.733 143.611 99.9538 143.612Z"
            fill="#005D7F"
          />
          <path
            d="M34.2315 132.069L167.243 107.41L167.777 116.854L35.834 147.809L34.2315 132.069Z"
            fill="#005D7F"
          />
          <path
            d="M165.644 108.984L167.247 107.41C167.247 107.41 174.191 104.262 174.191 103.738C174.191 103.409 184.446 99.9977 192.118 97.4912C196.403 96.0914 200.928 98.8615 201.538 103.256L202.499 110.181C203.074 114.321 199.893 118.048 195.642 118.215L176.862 118.953L167.781 116.854L165.644 108.984Z"
            fill="#005D7F"
          />
          <path
            d="M34.5078 134.955L34.1906 133.648L167.287 108.656L167.52 110.296L34.5078 134.955Z"
            fill="#3F3D56"
          />
          <path
            d="M34.8127 137.437L34.5078 136.004L167.432 111.243L167.52 112.919L34.8127 137.437Z"
            fill="#3F3D56"
          />
          <path
            d="M35.1085 140.411L35.0329 138.103L167.527 113.127L167.51 114.493L35.1085 140.411Z"
            fill="#3F3D56"
          />
          <path
            d="M35.469 143.866L35.5725 141.776L167.726 115.01L167.84 115.522L35.469 143.866Z"
            fill="#3F3D56"
          />
          <path
            d="M35.474 145.96L35.5752 144.399L167.53 115.876L167.648 116.387L35.474 145.96Z"
            fill="#3F3D56"
          />
          <path
            d="M111.905 58.682L105.287 55.0825L102.416 112.657L103.417 119.74C103.417 119.74 120.126 74.487 111.905 58.682Z"
            fill="#3F3D56"
          />
          <path
            d="M87.5067 40.7782C78.3611 40.7782 70.947 33.4963 70.947 24.5137C70.947 15.531 78.3611 8.24915 87.5067 8.24915C96.6524 8.24915 104.066 15.531 104.066 24.5137C104.066 33.4963 96.6524 40.7782 87.5067 40.7782Z"
            fill="#FFB6B6"
          />
          <path
            d="M103.408 34.22L99.4496 37.324L103.943 20.5788C103.943 20.5788 91.3893 20.3164 90.321 13.4958C90.321 13.4958 80.4386 13.2335 77.7677 13.2335C75.0967 13.2335 73.8916 30.5916 73.8916 30.5916C73.8916 30.5916 68.6865 16.3815 74.0284 9.03621C79.3702 1.69095 77.5006 6.15055 78.5689 3.52725C79.6373 0.903939 90.5881 -1.50868 97.5324 1.16627C104.477 3.84122 104.744 7.65432 106.881 7.68944C109.017 7.72456 116.496 18.2178 109.552 26.6124C102.607 35.007 103.408 34.22 103.408 34.22Z"
            fill="#302742"
          />
          <path
            d="M51.0708 140.951C49.108 139.413 47.6616 137.567 46.8465 135.742L27.206 122.249L34.0166 113.258L53.2067 127.913C55.1991 128.289 57.3529 129.264 59.3157 130.802C63.7997 134.316 65.5889 139.437 63.3122 142.239C61.0354 145.042 55.5548 144.465 51.0708 140.951Z"
            fill="#FFB6B6"
          />
          <path
            d="M59.0693 64.9127C59.0693 64.9127 54.2616 57.0428 49.454 61.7648C45.6497 65.5013 24.7868 89.2775 16.2443 99.0389C13.8886 101.731 12.5953 105.161 12.5953 108.71C12.5953 114.201 15.6817 119.243 20.6189 121.818L47.3172 135.742L54.7958 124.724L31.8259 108.46L67.082 89.5719L59.0693 64.9127Z"
            fill="#3F3D56"
          />
          <path
            d="M126.316 120.426C127.772 122.435 128.646 124.601 128.918 126.576L144.023 144.854L134.958 151.659L120.611 132.385C118.801 131.486 117.003 129.966 115.547 127.957C112.22 123.367 111.933 117.961 114.907 115.881C117.881 113.802 122.988 115.837 126.316 120.426Z"
            fill="#FFB6B6"
          />
          <path
            d="M143.494 137.437L147.746 149.646L135.46 155.942L126.112 149.646L120.236 136.267L137.597 131.282"
            fill="#3F3D56"
          />
        </svg>
        <div
          style={{
            position: "absolute",
            right: "-9%",
            transform: "scale(0.5)",
            top: "34%",
          }}
        >
          <img src={boat} alt="" className="img-fluid" />
          <svg
            width="78"
            height="66"
            viewBox="0 0 78 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: "23%", right: "5%" }}
          >
            <path
              d="M41.735 53.409C55.2922 53.409 66.2825 42.4962 66.2825 29.0344C66.2825 15.5727 55.2922 4.65985 41.735 4.65985C28.1778 4.65985 17.1875 15.5727 17.1875 29.0344C17.1875 42.4962 28.1778 53.409 41.735 53.409Z"
              fill="#1E183C"
            />
            <path
              d="M26.2814 30.9911C26.891 30.2664 27.6535 29.6834 28.5149 29.2834C29.3764 28.8833 30.3157 28.676 31.2667 28.676C32.2177 28.676 33.1571 28.8833 34.0186 29.2834C34.88 29.6834 35.6425 30.2664 36.2521 30.9911C37.285 30.012 38.0023 28.7508 38.3133 27.367C38.6243 25.9831 38.515 24.5387 37.9993 23.2165C37.4836 21.8943 36.5846 20.7537 35.4161 19.9388C34.2475 19.1239 32.8618 18.6714 31.4342 18.6385C30.0067 18.6056 28.6014 18.9938 27.396 19.754C26.1906 20.5142 25.2393 21.6122 24.6624 22.9092C24.0854 24.2062 23.9088 25.644 24.1548 27.0407C24.4008 28.4374 25.0584 29.7303 26.0445 30.7559C26.1216 30.8361 26.2005 30.9145 26.2814 30.9911Z"
              fill="white"
            />
            <path
              d="M45.7735 30.9911C46.3832 30.2664 47.1457 29.6834 48.0071 29.2834C48.8685 28.8834 49.8079 28.676 50.7589 28.676C51.7099 28.676 52.6493 28.8834 53.5107 29.2834C54.3722 29.6834 55.1347 30.2664 55.7443 30.9911C56.7772 30.012 57.4945 28.7508 57.8055 27.367C58.1165 25.9831 58.0072 24.5387 57.4915 23.2165C56.9758 21.8943 56.0768 20.7537 54.9083 19.9388C53.7397 19.1239 52.354 18.6714 50.9264 18.6385C49.4989 18.6056 48.0935 18.9938 46.8881 19.754C45.6828 20.5142 44.7315 21.6122 44.1545 22.9092C43.5776 24.2062 43.401 25.644 43.647 27.0407C43.893 28.4374 44.5506 29.7303 45.5366 30.7559C45.6138 30.8361 45.6927 30.9145 45.7735 30.9911Z"
              fill="white"
            />
            <path
              d="M28.8039 25.8305C30.1755 25.8305 31.2874 24.7264 31.2874 23.3644C31.2874 22.0025 30.1755 20.8984 28.8039 20.8984C27.4322 20.8984 26.3203 22.0025 26.3203 23.3644C26.3203 24.7264 27.4322 25.8305 28.8039 25.8305Z"
              fill="#1E183C"
            />
            <path
              d="M48.2961 25.8305C49.6677 25.8305 50.7796 24.7264 50.7796 23.3644C50.7796 22.0025 49.6677 20.8984 48.2961 20.8984C46.9244 20.8984 45.8125 22.0025 45.8125 23.3644C45.8125 24.7264 46.9244 25.8305 48.2961 25.8305Z"
              fill="#1E183C"
            />
            <path
              d="M40.6503 29.3928L38.4844 38.7125L42.0941 35.1282L40.6503 29.3928Z"
              fill="#6C63FF"
            />
            <path
              d="M51.7804 65.2378L49.3212 63.1886L49.3785 65.2378H48.6148L48.5537 63.0709L45.2336 65.2378H43.8438L48.529 62.1799L48.3474 55.7591L48.2119 50.9098L48.9738 50.889L49.1114 55.7591L49.2925 62.1742L52.9678 65.2378H51.7804Z"
              fill="#1E183C"
            />
            <path
              d="M40.2276 65.2378L37.7686 63.1886L37.826 65.2378H37.0642L37.0031 63.0709L33.6828 65.2378H32.293L36.9764 62.1799L36.7951 55.7591L36.6595 50.9098L37.423 50.889L37.5606 55.7591L37.74 62.1742L41.4152 65.2378H40.2276Z"
              fill="#1E183C"
            />
            <path
              d="M42.0942 2.86759C41.4206 2.86759 40.8264 3.38712 40.4292 4.18509C40.079 2.98517 39.3434 2.1507 38.4842 2.1507C38.4259 2.15646 38.3679 2.16613 38.3109 2.17962C37.9806 0.898488 37.2131 0 36.3183 0C35.1221 0 34.1523 1.60485 34.1523 3.5845C34.1523 5.56415 35.1221 7.169 36.3183 7.169C36.3767 7.16324 36.4346 7.15357 36.4917 7.14008C36.8219 8.42121 37.5894 9.3197 38.4842 9.3197C39.1578 9.3197 39.752 8.80018 40.1492 8.0022C40.4994 9.20212 41.2351 10.0366 42.0942 10.0366C43.2904 10.0366 44.2601 8.43174 44.2601 6.45209C44.2601 4.47244 43.2904 2.86759 42.0942 2.86759Z"
              fill="#1E183C"
            />
            <path
              d="M18.5897 29.7928L5.0672 27.615C4.38577 27.5052 3.69188 27.3952 3.00828 27.4908C2.32468 27.5863 1.64037 27.9205 1.29188 28.5122C1.1244 28.7966 1.0432 29.123 1.05805 29.4521C1.07289 29.7812 1.18314 30.099 1.37555 30.3674C1.56795 30.6358 1.83433 30.8432 2.14266 30.9649C2.45098 31.0865 2.78811 31.1172 3.11355 31.0531C2.37543 31.0294 1.59963 31.0136 0.944634 31.3524C0.28964 31.6911 -0.174156 32.5139 0.145175 33.1751C0.240997 33.3576 0.370626 33.5205 0.527273 33.6553C1.02019 34.094 1.62814 34.3852 2.28077 34.4951C2.9334 34.605 3.60403 34.5291 4.21505 34.2763C3.71723 34.9852 2.7294 35.0905 1.87489 35.2546C1.02039 35.4187 0.0325566 35.8987 0.000801242 36.7623C-0.0348802 37.7327 1.1282 38.2485 2.08569 38.446C7.19837 39.4906 12.5053 39.0611 17.3801 37.2082C17.928 37.021 18.4465 36.7581 18.9205 36.4272C19.4518 36.0267 19.8555 35.4826 20.0834 34.86C20.3113 34.2375 20.3538 33.563 20.2056 32.9171C20.0574 32.2713 19.725 31.6816 19.248 31.2185C18.771 30.7554 18.1698 30.4386 17.5162 30.3061"
              fill="#1E183C"
            />
            <path
              d="M76.9581 40.7987C74.7263 36.1133 71.1912 32.1597 66.77 29.4044C66.2901 29.0821 65.7668 28.8286 65.2156 28.6513C64.5739 28.4704 63.8933 28.477 63.2552 28.6703C62.6172 28.8635 62.0487 29.2352 61.6179 29.741C61.1871 30.2467 60.9122 30.865 60.8261 31.5218C60.74 32.1786 60.8464 32.8462 61.1324 33.4445L60.0742 32.9011C62.1988 36.9146 64.3234 40.9282 66.448 44.9418C66.7691 45.5485 67.0977 46.1653 67.5854 46.6504C68.0731 47.1355 68.7534 47.4778 69.4391 47.3987C69.7113 47.3684 69.9722 47.2737 70.1999 47.1225C70.4276 46.9713 70.6155 46.768 70.7477 46.5298C70.8799 46.2916 70.9527 46.0254 70.9598 45.7535C70.967 45.4815 70.9083 45.2119 70.7888 44.9672C71.087 45.3845 71.4791 45.727 71.934 45.9674C72.6002 46.2837 73.5413 46.1573 73.8815 45.5065C73.9709 45.3208 74.0241 45.12 74.0384 44.9146C74.0953 44.2598 73.9643 43.6023 73.6606 43.0183C73.3568 42.4343 72.8927 41.9477 72.322 41.6147C73.1918 41.5838 73.8702 42.3045 74.5159 42.884C75.1616 43.4635 76.1415 43.959 76.8558 43.4652C77.6583 42.9103 77.3745 41.6773 76.9581 40.7987Z"
              fill="#1E183C"
            />
          </svg>
        </div>
        <h1>FLAX FOR BUSINESS</h1>
        <p>
          SKIP THE HASSLE OF CODING AND FOCUS ON <br />
          BUILDING YOURBUSINESS-WITH THE QUICKEST <br />
          AND MOST ACCESSIBLE WAY TOMANAGE YOUR <br />
          WEBSITE AND ALL YOUR SOCIAL MEDIA HANDLES!
        </p>
        <a href="/">start the journey</a>
      </section> */}
      {/* <section className="main-container">
        <div className="homePage">
          <div className="container text-center">
            <img className="mt-4" src={logo} alt="" />
            <div className="homePage_form-container mt-5">
              <h1>
                Join Flax community of top people getting online web presence
                from around the world
              </h1>
              <h2>start building your hub 👇</h2>
              <form>
                <div class="mt-5 instagram_input">
                  <div class="did-floating-label-content input-group">
                    <span class="input-group-prepend">
                      <div class="input-group-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                      </div>
                    </span>
                    <span class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </span>
                    <input
                      class="did-floating-input"
                      type="text"
                      placeholder=" "
                    />
                    <label class="did-floating-label">
                      your instagram handle
                    </label>
                  </div>
                </div>
                <div class="mt-4 email_input">
                  <div class="did-floating-label-content input-group">
                    <input
                      class="did-floating-input"
                      type="text"
                      placeholder=" "
                    />
                    <label class="did-floating-label">
                      add an email we can contact
                    </label>
                  </div>

                  <div id="emailHelp" class="form-text">
                    email is private and used to verify new users
                  </div>
                </div>
                <div class="form-floating mt-4">
                  <div class="did-floating-label-content">
                    <select
                      class="did-floating-select"
                      onclick="this.setAttribute('value', this.value);"
                      onchange="this.setAttribute('value', this.value);"
                    >
                      <option value>creator</option>
                      <option value="1">Alabama</option>
                      <option value="2">Boston</option>
                      <option value="3">Ohaio</option>
                      <option value="4">New York</option>
                      <option value="5">Washington</option>
                    </select>
                    <label class="did-floating-label">user type</label>
                  </div>
                </div>
                <div class="form-check form-switch">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <h4 class="form-check-label" for="flexSwitchCheckDefault">
                    i want to receive exclusive updates and content from{" "}
                    <span>Flax.ai</span>
                  </h4>
                </div>
                <h3 className="mt-3">
                  working with an agency or group of talent?{" "}
                  <br className="d-sm-500-none" /> email us at
                  <a href="/"> support@flax.ai</a>
                </h3>
                <button type="submit" class="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
            </div>
            <img className="img-fluid mt-4" src={trustpilot} alt="" />

            <a className="d-flex justify-content-center mt-4" href="/">
              <img className="img-fluid" src={Group} alt="" />
            </a>
            <p className="mt-4">
              © <span> Flax.ai,</span> 2023 –{" "}
              <span className="text-underline"> All Right Reserve</span>
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
}
