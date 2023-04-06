import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import HomeMode from "./component/HomeMode";
import PageNotFound from "./component/PageNotFound";
import EssenceLayout from "./component/Theme/essence/EssenceLayout";
import { useState } from "react";
import HomePage from "./component/HomePage";

function App() {
  const [data, setData] = useState();
  const [modeData, setModeData] = useState();
  const [theme, setTheme] = useState();
  const [url, setUrl] = useState();
  const dataFetcher = (data, modeData, theme, url) => {
    setData(data);
    setModeData(modeData);
    setTheme(theme);
    setUrl(url);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/:linkType/:userId"
            element={<Home dataFetcher={dataFetcher} />}
          />
          <Route path="/:userMode" element={<HomeMode />} />
          <Route path="/notfound" element={<PageNotFound />} />
          <Route
            path="/essenceLayout"
            element={
              <EssenceLayout
                data={data}
                modeData={modeData}
                theme={theme}
                url={url}
              />
            }
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
