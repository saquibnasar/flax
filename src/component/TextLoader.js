import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function TextLoader({
  text,
  characterNumber,
  btnClass,
  capacityCount,
  id,
  type,
  theme,
}) {
  let bioText = text.trim().split(" ");
  let primaryText = [];
  let subText = [];

  bioText.map((value) => {
    if (primaryText.join(" ").split("").length > characterNumber) {
      subText.push(value.trim());
    } else {
      primaryText.push(value.trim());
    }
    return value;
  });
  const [changeText, setChangeText] = useState(primaryText.join(" "));

  useEffect(() => {
    setChangeText(primaryText.join(" "));

    const slider__paraBtn = document.querySelector("#slider__para .extra-btn");
    const slider__titleBtn = document.querySelector(
      "#slider__title .extra-btn"
    );

    if (slider__paraBtn) {
      slider__paraBtn.classList.remove("d-none");
    }
    if (slider__titleBtn) {
      slider__titleBtn.classList.remove("d-none");
    }
  }, [text]);

  const showHeroDetail = (event) => {
    setChangeText(text);
    event.target.classList.add("d-none");
    console.log(capacityCount, text.trim(), id);
    if (capacityCount < text.trim().split("").length) {
      console.log(capacityCount);
      const loaderTest = document.getElementById(id);
      loaderTest.classList.add("capacity");
    }
  };

  return (
    <>
      {changeText}{" "}
      {theme === "essence" && type === "slider" ? (
        <>
          {subText.length ? (
            <Link to="/EssenceLayout" className={`extra-btn ${btnClass}`}>
              ...more
            </Link>
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          {subText.length ? (
            <button
              className={`extra-btn ${btnClass}`}
              onClick={showHeroDetail}
            >
              ...more
            </button>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
}
