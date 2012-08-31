var headerList="H1 H2 H3 H4 H5 H6".split(" "),elements=[],headers=[],visible=[],iconThis="←",iconAll="↕",headerLinks=" <button class='this' title='Collapse this section'>"+iconThis+"</button> <button class='all' title='Collapse all sections at this level'>"+iconAll+"</button>",keyNext=106,keyPrev=107,keyNextUp=111,keyPrevUp=105,keyFirst=117,keyLast=109,keyAll=97,keyExpand=102,keyTheme=115,helpBoxText="<h3>Keyboard shortcuts</h3><ul><li><b>"+String.fromCharCode(keyNext)+
"</b>: Next section</li><li><b>"+String.fromCharCode(keyPrev)+"</b>: Previous section</li><li><b>return/enter</b>: Toggle active section</li><li><b>"+String.fromCharCode(keyNextUp)+"</b>: Next section (one level up)</li><li><b>"+String.fromCharCode(keyPrevUp)+"</b>: Previous section (one level up)</li><li><b>"+String.fromCharCode(keyFirst)+"</b>: First section</li><li><b>"+String.fromCharCode(keyLast)+"</b>: Last section</li><li><b>"+String.fromCharCode(keyAll)+"</b>: Toggle everything in this section</li><li><b>"+
String.fromCharCode(keyExpand)+"</b>: Expand all sections (do this before you search within the document)</li><li><b>"+String.fromCharCode(keyTheme)+"</b>: Switch theme (light/dark)</li></ul>";
window.onload=function(){document.documentElement.classList.add("light");elements=document.body.children;visible=headers=getElements(headerList,!1);for(var a=0;a<headers.length;a++)headers[a].innerHTML+=headerLinks,headers[a].onclick=toggleHandler;makeActive(headers[0]);var a=document.body.children[0],c=document.createElement("div");c.classList.add("js-infobox");document.body.insertBefore(c,a);c.innerHTML=helpBoxText};
window.onkeypress=function(a){a=a||window.event;a=a.which||a.keyCode;13===a?toggleHandler(whoIsActive()):a===keyAll&&toggleSame();if(a===keyNext)activateSame(visible,"down",1);else if(a===keyPrev)activateSame(visible,"up",1);else if(a===keyFirst)clearActive(visible),makeActive(visible[0]);else if(a===keyLast)clearActive(visible),makeActive(visible[visible.length-1]);else if(a===keyPrevUp)for(a=0;a<visible.length;a++){if(visible[a]===whoIsActive())for(var c=a-1;0<=c;c--)if(getHeaderNum(whoIsActive())>
getHeaderNum(visible[c])){clearActive(visible);makeActive(visible[c]);break}}else if(a===keyNextUp)for(a=0;a<visible.length;a++){if(visible[a]===whoIsActive())for(c=a+1;c<visible.length;c++)if(getHeaderNum(whoIsActive())>getHeaderNum(visible[c])){clearActive(visible);makeActive(visible[c]);break}}else if(a===keyExpand)for(;isAnythingHidden(headers);)for(a=0;a<headers.length;a++)headers[a].classList.contains("collapsed")&&toggleHandler(headers[a]);else a===keyTheme&&(a=document.documentElement,a.classList.toggle("dark"),
a.classList.toggle("light"))};function toggleHandler(a){var a=getTargets(a),c=whoIsActive();void 0===a.length?toggleMe(a):toggleSame();clearActive(headers);makeActive(c);visible=getElements(headerList,!0)}
function toggleMe(a){for(var c=getHeaderNum(a),b=0;b<elements.length;b++)if(elements[b]===a){c=compareHeaders(b,elements,c);if(isCollapsed(a)){toggleCollapse(a);for(b+=1;elements[b]!==c&&void 0!==elements[b];){var d=elements[b].tagName;if("H1"===d||"H2"===d||"H3"===d||"H4"===d||"H5"===d||"H6"===d)if(isCollapsed(elements[b])){d=getHeaderNum(elements[b]);d=compareHeaders(b,elements,d);for(elements[b].classList.remove("hidden");elements[b]!==d&&void 0!==elements[b];)b++}else elements[b].classList.remove("hidden"),
b++;else elements[b].classList.remove("hidden"),b++}}else{toggleCollapse(a);for(b+=1;elements[b]!==c&&void 0!==elements[b];)elements[b].classList.add("hidden"),b++}addToggler(a);break}}
function toggleSame(){var a=whoIsActive();if("H1"===a.tagName){var c=document.getElementsByTagName("H1");toggleHandler(a);if(isCollapsed(a))for(var b=0;b<c.length;b++)c[b]!==a&&!isCollapsed(c[b])&&toggleHandler(c[b]);else for(b=0;b<c.length;b++)c[b]!==a&&isCollapsed(c[b])&&toggleHandler(c[b])}else{toggleHandler(a);c=getHeaderNum(a);for(b=0;b<visible.length;b++)if(visible[b]===a){for(var d=0,e=b-1;getHeaderNum(visible[e])>=c;){var f=getHeaderNum(visible[e]);isCollapsed(a)?!isCollapsed(visible[e])&&
f===c?toggleHandler(visible[e]):d++:isCollapsed(visible[e])&&f===c?toggleHandler(visible[e]):d++;e--}for(b=b-d+1;getHeaderNum(visible[b])>=c;)d=getHeaderNum(visible[b]),isCollapsed(a)?!isCollapsed(visible[b])&&d===c&&toggleHandler(visible[b]):isCollapsed(visible[b])&&d===c&&toggleHandler(visible[b]),b++;break}}}
function activateSame(a,c,b){if("down"===c)for(c=0;c<a.length-1;c++){if(a[c].classList.contains("active")){clearActive(a);makeActive(a[c+b]);break}}else for(c=a.length-1;0<c;c--)if(a[c].classList.contains("active")){clearActive(a);makeActive(a[c-b]);break}}function compareHeaders(a,c,b){for(a+=1;a<c.length;a++){if(a===c.length-1)return elements[elements.length];for(var d=0;d<headerList.length;d++)if(c[a].tagName===headerList[d]&&c[a].tagName.slice(1)<=b)return c[a]}}
function getTargets(a){if(isClick(a)){clearActive(headers);for(var c=0,b=0;b<headerList.length;b++)a.target.tagName===headerList[b]&&(c=1);if(1===c)return makeActive(a.target),a.target;if(a.target.classList.contains("all"))return makeActive(a.target.parentElement),document.getElementsByTagName(a.target.parentElement.tagName);makeActive(a.target.parentElement);return a.target.parentElement}return a}
function getElements(a,c){for(var b=0,d=[],e=0;e<elements.length;e++)for(var f=0;f<a.length;f++)elements[e].tagName===a[f]&&!elements[e].parentElement.classList.contains("js-infobox")&&(c?elements[e].classList.contains("hidden")||(d[b]=elements[e],b++):(d[b]=elements[e],b++));return d}function addToggler(a){a.onclick=toggleHandler}function isCollapsed(a){return a.classList.contains("collapsed")}function toggleCollapse(a){a.classList.toggle("collapsed")}
function getHeaderNum(a){return void 0===a.length?a.tagName.slice(1):a[0].tagName.slice(1)}function makeActive(a){a.classList.add("active");a.scrollIntoView()}function clearActive(a){for(var c=0;c<a.length;c++)a[c].classList.contains("active")&&a[c].classList.remove("active")}function isClick(a){if(void 0!==a.target)return!0}function whoIsActive(){return document.getElementsByClassName("active")[0]}
function isAnythingHidden(a){if(void 0===a.length)return a.classList.contains("collapsed");for(var c=0,b=0;b<a.length;b++)a[b].classList.contains("collapsed")&&c++;return 0<c?!0:!1};
