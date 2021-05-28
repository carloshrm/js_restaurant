(()=>{"use strict";const e=document.createElement("div");e.id="home_cont",e.innerHTML='\n<img src="/js_restaurant/img/apple0.jpg">\n<div id="intro_cont">\n<h1> Imagine a restaurant... </h1>\n<br/>\n<h3> A restaurant where they would only serve apples. The tasty kind! Not that there\'s a kind that isn\'t tasty, but yeah...apples! <br/><br/>\nBig red ones, green ones, small yellow-tinged ones, you name it. None of that orange stuff, they\'re literally uncomparable, figuratively speaking. <br/><br/>\n</h3> <h2>Anyway, come over to our imaginary place for apple heaven!</h2>\n<br/>\n<h2><i>Everywhere!</i></h2>\n</div>\n';const t=document.createElement("div");t.id="types_cont",t.innerHTML="\n\n<div id='types_text'>\n<h1>TYPES</h1>\n</br>\n<h3>According to wikipedia, there are over 7,500 cultivars of apples. Some are red, others are green, plenty are somewhere in between.</h3> <br/>\n<h3>Althought most are, not all of them are for eating raw, some are too acidic and are used for making ciders or for cooking. </h3> <br/>\n<h3>Some wild varieties called crabapples can't be consumed at all, but are still kept for a variety of reasons, such as great looking trees full of flowers, and for harvesting wood used in smoked goods.</h3>\n</div>\n<img src=\"/js_restaurant/img/apple3.jpg\">\n";const n=document.createElement("div");n.id="info_cont",n.innerHTML='\n<img src="/js_restaurant/img/apple1.jpg">\n<div id="info_">\n<h1>Nutritional Info</h1>\n\n<table>\n<tr>\n  <th colspan=3>Portion:  1 Large Apple (~242g)</th>  \n</tr>\n<tr>\n<td>&nbsp;</td>\n</tr>\n<tr>\n    <th>Energy: </th>\n    <td>126 kcal</td>\n</tr>\n<tr>\n<th>Water: </th>\n<td>207g </td>\n</tr>\n<tr>\n<th>Carbs: </th>\n<td>33.4g (11% DV)</td>\n<td>Fibers: 5.8g (23% DV)</td>\n</tr>\n<tr>\n    <th>Protein: </th>\n    <td>&nbsp;</td>\n    <td>0.6g (1% DV)</td>\n</tr>\n<tr>\n<td>&nbsp;</td>\n</tr>\n<tr>\n    <th>Vitamin C: </th>\n    \n    <td>11.1mg (19% DV)</td>\n</tr>\n<tr>\n<th>Vitamin K: </th>\n\n    <td>5.3mcg (7% DV)</td>\n</tr>\n<tr>\n    <th>Potassium: </th>\n    \n    <td>259mg (7% DV)</td>\n</tr>\n</table>\n<h3>Source USDA FoodData Central.</h3>\n</div>\n';const r={container:document.getElementById("content"),getDiv:(e,t)=>{const n=document.createElement("div");return n.id=e,null!=t&&n.classList.add(t),n},getText:(e,t)=>{const n=document.createElement("p");return n.innerText=e,null!=t&&(n.id=t),n}},a=["home","types","info"];let i="";function o(a){let o=this.id;const d={home:e,types:t,info:n};""!==i&&i.classList.toggle("header_selected"),i.id!==o&&(i=this,r.main.innerHTML="",r.main.appendChild(d[o]),this.classList.toggle("header_selected"))}["header","main","footer"].forEach((e=>{const t=r.getDiv(e);if(r.container.appendChild(t),r[e]=document.getElementById(e),"header"==e&&(t.appendChild(r.getText("APPLES","header_title")),a.forEach((n=>{const a=r.getDiv(n,e);a.innerHTML=`<p>${n.toUpperCase()}</p>`,t.appendChild(a),a.addEventListener("click",o)}))),"footer"==e){const e=document.createElement("p");e.innerText="Made by me.© Images from pexels, data from wikipedia.",t.appendChild(e)}})),r.main.appendChild(e),document.getElementById("home").click()})();