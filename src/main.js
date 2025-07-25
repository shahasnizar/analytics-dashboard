import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
});

setupCounter(document.querySelector("#counter"));
