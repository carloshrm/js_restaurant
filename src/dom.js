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

export default dom;
