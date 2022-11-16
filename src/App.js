import _ from "lodash";
import "./App.css";

const App = ({ name }) => {
  return `
    <h1> ${_.join(["Hello", name], " ")} </h1>
    <p> Build apps with plain JS but with modern tooling  </p>
    `;
};

export default App;
