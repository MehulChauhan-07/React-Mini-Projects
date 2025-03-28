import React from "react";

import Fetch from "@components/API-calls/Fetch";
import Axios from "@components/API-calls/Axios";

const API_parser = () => {
  // we can also make toggle button to show and hide the counter component using the state
  const [showFetch, setShowFetch] = React.useState<boolean>(false);
  const [showAxios, setShowAxios] = React.useState<boolean>(false);

  return (
    <div className="default content">
      <h2>Fetch data from an API and display it in the browser</h2> <br />
      <h3>Fetch Data using fetch()</h3>
      <button onClick={() => setShowFetch(!showFetch)}>Toggle Fetch</button>
      {showFetch ? <Fetch /> : null}
      <br />
      <h3>Fetch Data using axios module</h3>
      <button onClick={() => setShowAxios(!showAxios)}>Toggle Axios</button>
      {showAxios ? <Axios /> : null}
      <br />
      <button onClick={() => (window.location.href = "/")}>Home</button>
    </div>
  );
};

export default API_parser;
