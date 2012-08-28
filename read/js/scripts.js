var headerList="H1 H2 H3 H4 H5 H6".split(" "),blockElements="INS DEL P DIV H1 H2 H3 H4 H5 H6 BLOCKQUOTE PRE TABLE DL OL UL ADDRESS SCRIPT NOSCRIPT FORM FIELDSET IFRAME MATH IMG OBJECT EMBED HR".split(" "),headers=[],visible=[],iconThis="←",iconAll="↕",headerLinks=" <button class='this' title='Collapse this section'>"+iconThis+"</button> <button class='all' title='Collapse all sections at this level'>"+iconAll+"</button>",keyNext=106,keyPrev=107,keyNextUp=108,keyPrevUp=
105,keyFirst=117,keyLast=109,keyAll=97,keyExpand=102,keyTheme=115,helpBoxText="<h3>Keyboard shortcuts</h3><ul><li><b>"+String.fromCharCode(keyNext)+"</b>: Next section</li><li><b>"+String.fromCharCode(keyPrev)+"</b>: Previous section</li><li><b>return/enter</b>: Toggle active section</li><li><b>"+String.fromCharCode(keyNextUp)+"</b>: Next section up</li><li><b>"+String.fromCharCode(keyPrevUp)+"</b>: Previous section up</li><li><b>"+String.fromCharCode(keyFirst)+"</b>: First section</li><li><b>"+String.fromCharCode(keyLast)+
"</b>: Last section</li><li><b>"+String.fromCharCode(keyAll)+"</b>: Toggle everything in this section</li><li><b>"+String.fromCharCode(keyExpand)+"</b>: Expand all sections (do this before you search within the document)</li><li><b>"+String.fromCharCode(keyTheme)+"</b>: Switch theme (light/dark)</li></ul>";
window.onload=function(){document.documentElement.classList.add("light");headers=getElements(headerList,!1);for(var a=0;a<headers.length;a++)headers[a].innerHTML+=headerLinks,headers[a].onclick=toggleHandler;makeActive(headers[0]);for(var a=document.getElementsByTagName("*"),b,c=0;c<a.length;c++)if("BODY"===a[c].tagName){b=a[c+1];break}a=document.createElement("div");a.classList.add("js-infobox");document.body.insertBefore(a,b);a.innerHTML=helpBoxText};
window.onkeypress=function(a){a=a||window.event;a=a.which||a.keyCode;0===visible.length?visible=getElements(headerList,!0):13===a?toggleHandler(whoIsActive()):a===keyAll&&toggleSame();if(a===keyNext)activateSame(visible,"down",1);else if(a===keyPrev)activateSame(visible,"up",1);else if(a===keyFirst)clearActive(visible),makeActive(visible[0]);else if(a===keyLast)clearActive(visible),makeActive(visible[visible.length-1]);else if(a===keyPrevUp)for(a=0;a<visible.length;a++){if(visible[a]===whoIsActive())for(var b=
a-1;0<=b;b--)if(getHeaderNum(whoIsActive())>getHeaderNum(visible[b])){clearActive(visible);makeActive(visible[b]);break}}else if(a===keyNextUp)for(a=0;a<visible.length;a++){if(visible[a]===whoIsActive())for(b=a+1;b<visible.length;b++)if(getHeaderNum(whoIsActive())>getHeaderNum(visible[b])){clearActive(visible);makeActive(visible[b]);break}}else if(a===keyExpand)for(;isAnythingHidden(headers);)for(a=0;a<headers.length;a++)headers[a].classList.contains("collapsed")&&toggleHandler(headers[a]);else a===
keyTheme&&(a=document.documentElement,a.classList.toggle("dark"),a.classList.toggle("light"))};function toggleHandler(a){var a=getTargets(a),b=whoIsActive();void 0===a.length?toggleMe(a):toggleSame();clearActive(headers);makeActive(b);visible=getElements(headerList,!0)}
function toggleMe(a){for(var b=getHeaderNum(a),c=getElements(blockElements,!1),d=0;d<c.length;d++)if(c[d]===a){b=compareHeaders(d,c,b);if(isCollapsed(a)){toggleCollapse(a);for(d+=1;c[d]!==b&&void 0!==c[d];){var e=c[d].tagName;if("H1"===e||"H2"===e||"H3"===e||"H4"===e||"H5"===e||"H6"===e)if(isCollapsed(c[d])){e=getHeaderNum(c[d]);e=compareHeaders(d,c,e);for(c[d].classList.remove("hidden");c[d]!==e&&void 0!==c[d];)d++}else c[d].classList.remove("hidden"),d++;else c[d].classList.remove("hidden"),d++}}else{toggleCollapse(a);
for(d+=1;c[d]!==b&&void 0!==c[d];)c[d].classList.add("hidden"),d++}addToggler(a);break}}
function toggleSame(){var a=whoIsActive();if("H1"===a.tagName){var b=document.getElementsByTagName("H1");toggleHandler(a);if(isCollapsed(a))for(var c=0;c<b.length;c++)b[c]!==a&&!isCollapsed(b[c])&&toggleHandler(b[c]);else for(c=0;c<b.length;c++)b[c]!==a&&isCollapsed(b[c])&&toggleHandler(b[c])}else{toggleHandler(a);b=getHeaderNum(a);for(c=0;c<visible.length;c++)if(visible[c]===a){for(var d=0,e=c-1;getHeaderNum(visible[e])>=b;){var f=getHeaderNum(visible[e]);isCollapsed(a)?!isCollapsed(visible[e])&&
f===b?toggleHandler(visible[e]):d++:isCollapsed(visible[e])&&f===b?toggleHandler(visible[e]):d++;e--}for(c=c-d+1;getHeaderNum(visible[c])>=b;)d=getHeaderNum(visible[c]),isCollapsed(a)?!isCollapsed(visible[c])&&d===b&&toggleHandler(visible[c]):isCollapsed(visible[c])&&d===b&&toggleHandler(visible[c]),c++;break}}}
function activateSame(a,b,c){if("down"===b)for(b=0;b<a.length-1;b++){if(a[b].classList.contains("active")){clearActive(a);makeActive(a[b+c]);break}}else for(b=a.length-1;0<b;b--)if(a[b].classList.contains("active")){clearActive(a);makeActive(a[b-c]);break}}function compareHeaders(a,b,c){for(a+=1;a<b.length;a++){if(a===b.length-1)return b=getElements(blockElements,!1),b[b.length];for(var d=0;d<headerList.length;d++)if(b[a].tagName===headerList[d]&&b[a].tagName.slice(1)<=c)return b[a]}}
function getTargets(a){if(isClick(a)){clearActive(headers);for(var b=0,c=0;c<headerList.length;c++)a.target.tagName===headerList[c]&&(b=1);if(1===b)return makeActive(a.target),a.target;if(a.target.classList.contains("all"))return makeActive(a.target.parentElement),document.getElementsByTagName(a.target.parentElement.tagName);makeActive(a.target.parentElement);return a.target.parentElement}return a}
function getElements(a,b){for(var c=document.getElementsByTagName("*"),d=0,e=[],f=0;f<c.length;f++)for(var g=0;g<a.length;g++)c[f].tagName===a[g]&&!c[f].parentElement.classList.contains("js-infobox")&&(b?c[f].classList.contains("hidden")||(e[d]=c[f],d++):(e[d]=c[f],d++));return e}function addToggler(a){a.onclick=toggleHandler}function isCollapsed(a){return a.classList.contains("collapsed")}function toggleCollapse(a){a.classList.toggle("collapsed")}
function getHeaderNum(a){return void 0===a.length?a.tagName.slice(1):a[0].tagName.slice(1)}function makeActive(a){a.classList.add("active");a.scrollIntoView()}function clearActive(a){for(var b=0;b<a.length;b++)a[b].classList.contains("active")&&a[b].classList.remove("active")}function isClick(a){if(void 0!==a.target)return!0}function whoIsActive(){return document.getElementsByClassName("active")[0]}
function isAnythingHidden(a){if(void 0===a.length)return a.classList.contains("collapsed");for(var b=0,c=0;c<a.length;c++)a[c].classList.contains("collapsed")&&b++;return 0<b?!0:!1};
