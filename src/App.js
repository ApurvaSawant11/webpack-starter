import _ from "lodash";
import "./App.css";
import Loader from "./loader.svg";

const App = ({ name }) => {
  return `
    <h1> ${_.join(["Hello", name], " ")} </h1>
    <p> Build apps with plain JS but with modern tooling  </p>
    <img src="${Loader}" alt="loader" />
    `;
};

export default App;
