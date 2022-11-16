import "./App.css";
import LoaderSVG from "./loader.svg";

const root = document.getElementById("root");
let route;

function init() {
  root.innerHTML = `
        <h1> vanillaJS app Builder </h1>
        <button id="lazy-loading"> Lazy Loader </button>
        <div id="route"></div>
`;

  route = document.querySelector("#route");

  document
    .querySelector("#lazy-loading")
    .addEventListener("click", showLoaderPage);
}

function showLoader(root) {
  const loader = document.createElement("img");
  loader.src = LoaderSVG;
  root.appendChild(loader);
  return loader;
}

function hideLoader(root, loader) {
  root.removeChild(loader);
}

function showLoaderPage() {
  const loader = showLoader(root);

  import("./App").then(({ default: App }) => {
    hideLoader(root, loader);
    route.innerHTML = App({ name: "Webpack" });
  });
}

init();
