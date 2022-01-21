import React from "react";
import ReactDom from "react-dom";

// JSX記法はjavascriptにhtmlを書いていく
const App = () => {
  return (
    <>
      <h1>こんにちは!</h1>
      <p>お元気ですか?</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
