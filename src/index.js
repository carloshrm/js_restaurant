import * as contentModule from "./content";
import dom from "./dom";
import "./style.css";
import "./background.jpg";
import "./apple0.jpg";
import "./apple1.jpg";
import "./apple2.jpg";
import "./apple3.jpg";

const bodyElements = ["header", "main", "footer"];
const tabs = ["home", "types", "info"];
let lastClick = "";

bodyElements.forEach((e) => {
  const largerParent = dom.getDiv(e);
  dom.container.appendChild(largerParent);
  dom[e] = document.getElementById(e);
  if (e == "header") {
    largerParent.appendChild(dom.getText("APPLES", "header_title"));
    tabs.forEach((t) => {
      const singleTab = dom.getDiv(t, e);
      singleTab.innerHTML = `<p>${t.toUpperCase()}</p>`;
      largerParent.appendChild(singleTab);
      singleTab.addEventListener("click", swapContent);
    });
  }
  if (e == "footer") {
    const fText = document.createElement("p");
    fText.innerText = "Made by me.© Images from pexels, data from wikipedia.";
    largerParent.appendChild(fText);
  }
});

function swapContent(e) {
  let clickTarget = this.id;
  const contentMatch = {
    home: contentModule.homePage,
    types: contentModule.typeContent,
    info: contentModule.infoContent,
  };
  if (lastClick !== "") lastClick.classList.toggle("header_selected");
  if (lastClick.id !== clickTarget) {
    lastClick = this;
    dom.main.innerHTML = "";
    dom.main.appendChild(contentMatch[clickTarget]);
    this.classList.toggle("header_selected");
  }
}
(() => {
  dom.main.appendChild(contentModule.homePage);
  document.getElementById("home").click();
})();
