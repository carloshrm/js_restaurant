const homePage = document.createElement("div");
homePage.id = "home_cont";
homePage.innerHTML = `
<img src="/js_restaurant/img/apple0.jpg">
<div id="intro_cont">
<h1> Imagine a restaurant... </h1>
<br/>
<h3> A restaurant where they would only serve apples. The tasty kind! Not that there's a kind that isn't tasty, but yeah...apples! <br/><br/>
Big red ones, green ones, small yellow-tinged ones, you name it. None of that orange stuff, they're literally uncomparable, figuratively speaking. <br/><br/>
</h3> <h2>Anyway, come over to our imaginary place for apple heaven!</h2>
<br/>
<h2><i>Everywhere!</i></h2>
</div>
`;

const typeContent = document.createElement("div");
typeContent.id = "types_cont";
typeContent.innerHTML = `

<div id='types_text'>
<h1>TYPES</h1>
</br>
<h3>According to wikipedia, there are over 7,500 cultivars of apples. Some are red, others are green, plenty are somewhere in between.</h3> <br/>
<h3>Althought most are, not all of them are for eating raw, some are too acidic and are used for making ciders or for cooking. </h3> <br/>
<h3>Some wild varieties called crabapples can't be consumed at all, but are still kept for a variety of reasons, such as great looking trees full of flowers, and for harvesting wood used in smoked goods.</h3>
</div>
<img src="/js_restaurant/img/apple3.jpg">
`;

const infoContent = document.createElement("div");
infoContent.id = "info_cont";
infoContent.innerHTML = `
<img src="/js_restaurant/img/apple1.jpg">
<div id="info_">
<h1>Nutritional Info</h1>

<table>
<tr>
  <th colspan=3>Portion:  1 Large Apple (~242g)</th>  
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
    <th>Energy: </th>
    <td>126 kcal</td>
</tr>
<tr>
<th>Water: </th>
<td>207g </td>
</tr>
<tr>
<th>Carbs: </th>
<td>33.4g (11% DV)</td>
<td>Fibers: 5.8g (23% DV)</td>
</tr>
<tr>
    <th>Protein: </th>
    <td>&nbsp;</td>
    <td>0.6g (1% DV)</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
    <th>Vitamin C: </th>
    
    <td>11.1mg (19% DV)</td>
</tr>
<tr>
<th>Vitamin K: </th>

    <td>5.3mcg (7% DV)</td>
</tr>
<tr>
    <th>Potassium: </th>
    
    <td>259mg (7% DV)</td>
</tr>
</table>
<h3>Source USDA FoodData Central.</h3>
</div>
`;

export { homePage, typeContent, infoContent };
