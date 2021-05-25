import _ from "lodash";
import * as mainInfo from "./content.js";

const dom = {
  container: document.getElementById("content"),
  getDiv: (id, cl = undefined) => {
    const div = document.createElement("div");
    div.id = id;
    if (cl != undefined) div.classList.add(`${cl}`);
    return div;
  },
};
const bodyElements = ["header", "content", "footer"];
const tabs = ["header_home", "header_type", "header_info"];
bodyElements.forEach((e) => {
  const el = dom.getDiv(e);
  dom.container.appendChild(el);
  dom[e] = document.getElementById(e);
  if (e == "header") {
    tabs.forEach((t) => {
      const i = dom.getDiv(t, e);
      el.appendChild(i);
    });
  }
  if (e == "footer") {
    const fText = document.createElement("p");
    fText.innerText = "footer";
    el.appendChild(fText);
  }
});

dom.content.appendChild(mainInfo.mainInfo);
