import * as contentModule from "./content.js";

const dom = {
  container: document.getElementById("content"),
  getDiv: (id, cl = undefined) => {
    const div = document.createElement("div");
    div.id = id;
    if (cl != undefined) div.classList.add(cl);
    return div;
  },
  getText: (content, id = undefined) => {
    const p = document.createElement("p");
    p.innerText = content;
    if (id != undefined) p.id = id;
    return p;
  },
};
const bodyElements = ["header", "main", "footer"];
const tabs = ["home", "types", "info"];

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

let lastClick = "";
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
dom.main.appendChild(contentModule.homePage);
