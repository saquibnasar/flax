import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function HomeMode() {
  const { userMode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://7drkndiu7g.execute-api.ap-south-1.amazonaws.com/v1/previewprofile/${userMode}`
    )
      .then((res) => res.json())

      .then((data) => {
        if (data["UserMessage"] === "Server Side Error") {
          navigate("/notfound");
        }
        if (data.Mode === "Direct") {
          navigate(`/direct/${userMode}`);
        } else if (data.Mode === "Personal") {
          navigate(`/personal/${userMode}`);
        } else if (data.Mode === "Business") {
          navigate(`/business/${userMode}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [1]);
  return (
    <>
      <div className="main-container">
        <Loader />
      </div>
    </>
  );
}
