!function t(e,a,s){function i(n,r){if(!a[n]){if(!e[n]){var l="function"==typeof require&&require;if(!r&&l)return l(n,!0);if(o)return o(n,!0);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}var p=a[n]={exports:{}};e[n][0].call(p.exports,function(t){var a=e[n][1][t];return i(a?a:t)},p,p.exports,t,e,a,s)}return a[n].exports}for(var o="function"==typeof require&&require,n=0;n<s.length;n++)i(s[n]);return i}({"/home/travis/build/satsummit/landscape/app/assets/data/capability-translation-chart.js":[function(t,e,a){"use strict";e.exports={resolution:{display:"Spatial resolution (m)",fn:function(t){return t+"m resolution"}},revisit:{display:"Revisit rate (days)",fn:function(t){return t+" days"}},cost:{display:"Cost ($ per km²)",fn:function(t){return"$"+t+"/km²"}}}},{}],"/home/travis/build/satsummit/landscape/app/assets/data/capability-translation.js":[function(t,e,a){"use strict";e.exports={live:{display:"Operational",fn:function(t){return t}},open:{display:"Open Data",fn:function(t){return t}},resolution:{display:"Spatial resolution (m)",fn:function(t){return t+"m resolution"}},revisit:{display:"Revisit rate (days)",fn:function(t){return t+" days"}},cost:{display:"Cost ($ per km²)",fn:function(t){return"$"+t+"/km²"}}}},{}],"/home/travis/build/satsummit/landscape/app/assets/data/capability.json":[function(t,e,a){e.exports=[{company:"Airbus",sensor:"pan,rgb,nir",revisit:"1",platform:"SPOT 6/7",cost:"5.15",resolution:"1.5",acquisition:6e6,multispectral:"Yes",open:"No",live:"Live","short":"SPOT 6/7",link:"#"},{company:"Airbus",sensor:"pan,rgb,nir",revisit:"1",platform:"Pléiades",cost:"13",resolution:"0.5",acquisition:1e6,multispectral:"Yes",open:"No",live:"Live","short":"Pléiades",link:"#"},{company:"DigitalGlobe",sensor:"pan,rgb,nir,swir,cavis",revisit:"1",platform:"WV3",cost:"32",resolution:"0.31",acquisition:68e4,multispectral:"Yes",open:"No",live:"Live","short":"DG WV3",link:"#"},{company:"DigitalGlobe",sensor:null,revisit:"1.1",platform:"WV2",cost:"17.5",resolution:"0.46",acquisition:null,multispectral:"Yes",open:"No",live:"Live","short":"DG WV2",link:"#"},{company:"Blackbridge",sensor:"rgb,nir",revisit:"5.5",platform:"RapidEye",cost:"1.28",resolution:"5",acquisition:4e6,multispectral:"Yes",open:"No",live:"Live","short":"RapidEye",link:"#"},{company:"NASA/USGS",sensor:"rg,nir",revisit:"18",platform:"LandSat 1-3",cost:"0",resolution:"60",acquisition:null,multispectral:"Yes",open:"Yes",live:"Decommisioned","short":"Landsat 1-3",link:"http://landsat.usgs.gov/about_landsat3.php"},{company:"NASA/USGS",sensor:"rgb,nir,swir",revisit:"18",platform:"LandSat 4-5",cost:"0",resolution:"30",acquisition:null,multispectral:"Yes",open:"Yes",live:"Decommisioned","short":"Landsat 4-5",link:"http://landsat.usgs.gov/about_landsat5.php"},{company:"NASA/USGS",sensor:"pan,rgb,nir,swir",revisit:"18",platform:"LandSat 7-8",cost:"0",resolution:"15",acquisition:null,multispectral:"Yes",open:"Yes",live:"Live","short":"Landsat 7-8",link:"http://landsat.usgs.gov/landsat8.php"},{company:"NASA",sensor:"pan,rgb,nir,swir",revisit:"1.5",platform:"MODIS",cost:"0",resolution:"500",acquisition:null,multispectral:"Yes",open:"Yes",live:"Live","short":"MODIS",link:"http://modis.gsfc.nasa.gov/"},{company:"ESA",sensor:null,revisit:"5",platform:"Sentinel 2",cost:"0",resolution:"10",acquisition:null,multispectral:"Yes",open:"Yes",live:"Live","short":"Sentinel 2",link:"#"},{company:"Skybox",sensor:null,revisit:null,platform:null,cost:null,resolution:"0.9",acquisition:null,multispectral:"Yes",open:"No",live:"Planned","short":"Skybox",link:"#"},{company:"Planet Labs",sensor:null,revisit:"0.25",platform:null,cost:null,resolution:"3",acquisition:null,multispectral:"No",open:"No",live:"Planned","short":"Planet Labs",link:"#"}]},{}],"/home/travis/build/satsummit/landscape/app/assets/scripts/components/axis.js":[function(t,e,a){"use strict";var s=function(){function t(t,e){var a=[],s=!0,i=!1,o=void 0;try{for(var n,r=t[Symbol.iterator]();!(s=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);s=!0);}catch(l){i=!0,o=l}finally{try{!s&&r["return"]&&r["return"]()}finally{if(i)throw o}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=t("react"),o=t("classnames"),n=t("lodash"),r=i.createClass({displayName:"Axis",propTypes:{orientation:i.PropTypes.string,scale:i.PropTypes.func,domain:i.PropTypes.array,format:i.PropTypes.func},render:function(){var t=this.props,e=t.orientation,a=t.scale,r=t.domain,l=t.format,c=n.map(r,a),p=s(c,2),m=p[0],d=p[1],u=0,h=0;if("vertical"===e&&(u=m,h=d,m=0,d=0),l||(l=a),isNaN(m)||isNaN(d)||isNaN(u)||isNaN(h)||"function"!=typeof a.ticks)return i.createElement("g",null);var y=a.ticks(4);return i.createElement("g",{className:o("axis",e)},i.createElement("line",{x1:m,x2:d,y1:u,y2:h,className:"axis"}),y.map(function(t,s){return i.createElement("text",{className:"axis tick",key:t,x:"vertical"===e?-8:a(t),y:"vertical"===e?a(t):4,dy:"vertical"===e?0:"1em",textAnchor:"vertical"===e?"end":"middle"},l(t))}))}});e.exports=r},{classnames:"classnames",lodash:"lodash",react:"react"}],"/home/travis/build/satsummit/landscape/app/assets/scripts/components/capability-chart.js":[function(t,e,a){"use strict";var s=t("react"),i=t("lodash"),o=t("react-dropdown"),n=t("./scatterplot"),r=t("../../data/capability-translation-chart"),l=s.createClass({displayName:"Capabilities",propTypes:{data:s.PropTypes.array},getInitialState:function(){return{x:"cost",y:"resolution",width:0,height:0}},componentDidMount:function(){var t=this;this.handleResize=i.debounce(function(){var e=s.findDOMNode(t);t.setState({width:e.offsetWidth,height:e.offsetHeight})},100),window.addEventListener("resize",t.handleResize),this.handleResize()},componentWillUnmount:function(){window.removeEventListener("resize",this.handleResize)},_xAxisSelect:function(t){this.setState({x:t.value})},_yAxisSelect:function(t){console.log("setting state",t.value),this.setState({y:t.value})},render:function(){var t=this.state,e=t.x,a=t.y,l=t.width,c=t.height,p=i.map(Object.keys(r).filter(function(t){return t!==e&&t!==a}),function(t){return{label:r[t].display,value:t}}),m=[{value:e,label:r[e].display}].concat(p),d=[{value:a,label:r[a].display}].concat(p),u=this.props.data,h={left:240,right:180,top:80,bottom:120};return s.createElement("div",{className:"scatterplot"},s.createElement("svg",{width:l+"px",height:c+"px"},s.createElement(n,{data:u,width:l-h.left-h.right,height:c-h.top-h.bottom,margins:h,xIndicator:e,yIndicator:a,xFormat:r[e].fn,yFormat:r[a].fn})),s.createElement("div",{className:"scatterplot-axis-label x-label"},s.createElement(o,{options:m,onChange:this._xAxisSelect,value:m[0]})),s.createElement("div",{className:"scatterplot-axis-label y-label dropdown"},s.createElement(o,{options:d,onChange:this._yAxisSelect,value:d[0]})))}});e.exports=l},{"../../data/capability-translation-chart":"/home/travis/build/satsummit/landscape/app/assets/data/capability-translation-chart.js","./scatterplot":"/home/travis/build/satsummit/landscape/app/assets/scripts/components/scatterplot.js",lodash:"lodash",react:"react","react-dropdown":"react-dropdown"}],"/home/travis/build/satsummit/landscape/app/assets/scripts/components/capability-table.js":[function(t,e,a){"use strict";var s=t("react"),i=t("lodash"),o=t("../../data/capability-translation"),n=s.createClass({displayName:"CapabilitiesTable",propTypes:{data:s.PropTypes.array},getInitialState:function(){return{sort:"name"}},_sort:function(t){var e=t.currentTarget.dataset.sort;this.state.sort!==e&&this.setState({sort:e})},render:function(){var t=this,e=this.props.data,a=this.state.sort,n=i.map(o,function(t,e){return{display:t.display,sort:e}});n.unshift({display:"Satellite",sort:"name"});var r=i.chain(e).sortBy(function(t){return"name"===a||"n/a"===t[a]?t[a]:-1*t[a]}).map(function(t){return[t.name].concat(i.map(o,function(e,a){return void 0===t[a]||null===t[a]?"n/a":t[a]}))}).value();return s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,n.map(function(e,a){return s.createElement("th",{key:"capability-table-header-"+a,onClick:t._sort,"data-sort":e.sort},e.display," ▼")}))),s.createElement("tbody",null,r.map(function(t,e){return s.createElement("tr",{key:"capability-table-row-"+e},t.map(function(t,e){return s.createElement("td",{key:"capability-table-cell-"+e},t)}))})))}});e.exports=n},{"../../data/capability-translation":"/home/travis/build/satsummit/landscape/app/assets/data/capability-translation.js",lodash:"lodash",react:"react"}],"/home/travis/build/satsummit/landscape/app/assets/scripts/components/map.js":[function(t,e,a){"use strict";var s=t("react"),i=window.L;e.exports=s.createClass({displayName:"Map",propTypes:{id:s.PropTypes.string,options:s.PropTypes.object,isStatic:s.PropTypes.bool},map:null,componentDidMount:function(){var t=s.findDOMNode(this),e=this.props.options,a=e.id,o=e.accessToken;i.mapbox.accessToken=o;var n=i.mapbox.tileLayer(a,{format:"png"});e.tileLayer=n,e.attributionControl={compact:!0},this.map=i.mapbox.map(t,a,e),this.map.tap&&this.map.tap.disable()},componentWillReceiveProps:function(t){var e=this.map;e.eachLayer(function(t){e.removeLayer(t)}),e.tap&&e.tap.disable(),e.scrollWheelZoom.disable();var a=t.options.id,s=i.mapbox.tileLayer(a,{format:"png"});s.addTo(this.map).bringToFront(),t.options&&t.options.zoom&&e.setZoom(t.options.zoom)},render:function(){var t=this.props.isStatic,e=t?"static-map":"map";return s.createElement("div",{className:e})}})},{react:"react"}],"/home/travis/build/satsummit/landscape/app/assets/scripts/components/resolution-comparison.js":[function(t,e,a){"use strict";var s=t("react"),i=t("./map"),o=t("lodash");e.exports=s.createClass({displayName:"ResolutionComparison",propTypes:{maps:s.PropTypes.array,token:s.PropTypes.string,center:s.PropTypes.array},getInitialState:function(){return{active:this.props.maps[0],selectedValue:"apple"}},_handleChange:function(t){var e=t.target.value.slice(6);this.setState({active:o.find(this.props.maps,{id:e})})},render:function(){var t=this,e=o.reduce(this.props.maps,function(t,e){return t.zoom>e.zoom?t.zoom:e.zoom}),a=this.state.active,n={center:this.props.center,zoom:a.zoom,id:a.id,scrollWheelZoom:!1,accessToken:a.accessToken,maxZoom:e};return s.createElement("div",{className:"inherit-height"},s.createElement("div",{className:"inline-radio-selector"},this.props.maps.map(function(e,i){return s.createElement("div",{className:"inline-radio-item",key:"radio-selector-"+i},s.createElement("input",{type:"radio",value:"radio-"+e.id,id:"radio-"+e.id,className:"radio-item",checked:e.id===a.id,onChange:t._handleChange}),s.createElement("label",{htmlFor:"radio-"+e.id,className:"radio-item-label"},e.displayAttrib2?e.displayAttrib1+" ("+e.displayAttrib2+")":e.displayAttrib1))})),s.createElement("div",{className:"map-container"},s.createElement("div",{id:"resolution-map",className:"static-map"},s.createElement(i,{options:n,id:"resolution-"+n.id,isStatic:!0}))))}})},{"./map":"/home/travis/build/satsummit/landscape/app/assets/scripts/components/map.js",lodash:"lodash",react:"react"}],"/home/travis/build/satsummit/landscape/app/assets/scripts/components/scatterplot.js":[function(t,e,a){"use strict";var s=t("react"),i=t("d3"),o=t("react-tooltip"),n=t("lodash"),r=t("./axis"),l=s.createClass({displayName:"Scatterplot",propTypes:{data:s.PropTypes.array,margins:s.PropTypes.object,xIndicator:s.PropTypes.string,yIndicator:s.PropTypes.string,xFormat:s.PropTypes.func,yFormat:s.PropTypes.func,width:s.PropTypes.number,height:s.PropTypes.number},getInitialState:function(){return{scales:{x:function(t){return t},y:function(t){return t}},domains:{x:[0,0],y:[0,0]},points:[]}},icon:{width:55,height:25},componentWillReceiveProps:function(t){(t.width!==this.props.width||t.height!==this.props.height||t.xIndicator!==this.props.xIndicator||t.yIndicator!==this.props.yIndicator)&&this.setState(this._calcScales(n.extend({},this.props,t)))},_calcScales:function(t){var e=t.width,a=t.height,s=t.data,o=t.xIndicator,r=t.yIndicator,l=t.xFormat,c=t.yFormat;n.each(n.clone(s),function(t){t.x=null===t[o]?null:+t[o],t.y=null===t[r]?null:+t[r]});var p=n.filter(s,function(t){return null!==t.x&&null!==t.y});if(!p.length)return{width:e,height:a};var m={x:i.extent(n.pluck(p,"x")),y:i.extent(n.pluck(p,"y"))},d={x:i.scale.linear().domain(m.x).range([0,e]),y:i.scale.linear().domain([0,15]).range([a,0])};return n.each(p,function(t,a){t.left=d.x(t.x),t.top=d.y(t.y),t.xLabel=l(t.x),t.yLabel=c(t.y),t.place=e-t.left<20?"left":"right"}),{scales:d,domains:m,points:p}},getPosition:function(t){return{width:t.clientX,height:t.clientY}},render:function(){var t=this.state,e=t.points,a=t.scales,i=t.domains,n=this.props,l=n.margins,c=n.height,p=this.icon,m='<image class="satellite-icon" width="'+p.width+'" height="'+p.height+'" x="'+.4*-p.width+'" y="'+.6*-p.height+'" xlink:href="assets/graphics/content/satellite-sprite.png" />';return s.createElement("g",null,s.createElement("g",{transform:"translate("+l.left+", "+(c+l.top)+")"},s.createElement(r,{orientation:"horizontal",scale:a.x,domain:i.x,format:function(t){return t}})),s.createElement("g",{transform:"translate("+l.left+", "+l.top+")"},s.createElement(r,{orientation:"vertical",scale:a.y,domain:i.y,format:function(t){return t}})),s.createElement("g",{className:"scatter-points",transform:"translate("+l.left+", "+l.top+")"},e.map(function(t,e){return s.createElement("g",{className:"scatterplot-icon","data-tip":t.xLabel+", "+t.yLabel,"data-place":t.place,"data-type":"info",transform:"translate("+t.left+", "+t.top+")",key:"scatterplot-marker-"+e},s.createElement("g",{dangerouslySetInnerHTML:{__html:m}}),s.createElement("text",{className:"scatterplot-label",x:.4*p.width,dy:"-1em",textAnchor:"start"},t["short"]))}),s.createElement(o,null)))}});e.exports=l},{"./axis":"/home/travis/build/satsummit/landscape/app/assets/scripts/components/axis.js",d3:"d3",lodash:"lodash",react:"react","react-tooltip":"react-tooltip"}],"/home/travis/build/satsummit/landscape/app/assets/scripts/components/toggled-resolution-comparison.js":[function(t,e,a){"use strict";var s=t("react"),i=t("./map"),o=t("lodash");e.exports=s.createClass({displayName:"ToggledResolutionComparison",propTypes:{maps:s.PropTypes.array,imgTypes:s.PropTypes.array,token:s.PropTypes.string,center:s.PropTypes.array,messages:s.PropTypes.array},getInitialState:function(){return{active:this.props.maps[0],key:this.props.imgTypes[0].key}},_changeImg:function(t){var e=t.target.value.slice(6);this.setState({active:o.find(this.props.maps,{id:e})})},_changeImgType:function(t){this.setState({key:t.target.value.slice(6)})},render:function(){var t=this,e=this.state.active[this.state.key],a={center:this.props.center,zoom:this.state.active.zoom,id:e,scrollWheelZoom:!1,accessToken:this.state.active.accessToken},o="",n=this.props.messages;if(n)for(var r=n.length-1;r>=0;r--){var l=n[r];this.state.active.id===l.sensorCon&&this.state.key===l.imgCon&&(o=s.createElement("div",{className:"image-comparison-message",dangerouslySetInnerHTML:{__html:l.msgStr}}))}return s.createElement("div",{className:"inherit-height"},s.createElement("div",{className:"inline-radio-selector"},this.props.maps.map(function(e,a){return s.createElement("div",{className:"inline-radio-item",key:"radio-selector-"+a},s.createElement("input",{type:"radio",value:"radio-"+e.id,id:"radio-"+e.id,className:"radio-item",checked:e.id===t.state.active.id,onChange:t._changeImg}),s.createElement("label",{htmlFor:"radio-"+e.id,className:"radio-item-label"},e.displayAttrib2?e.displayAttrib1+" ("+e.displayAttrib2+")":e.displayAttrib1))})),o,s.createElement("div",{className:"map-container"},s.createElement("div",{id:"resolution-map",className:"static-map"},s.createElement(i,{options:a,id:"resolution-"+a.id}))),s.createElement("div",{className:"inline-radio-selector-embedded"},this.props.imgTypes.map(function(e,a){return s.createElement("div",{className:"inline-radio-item-embedded",key:"radio-selector-"+a},s.createElement("input",{type:"radio",value:"radio-"+e.key,id:"radio-"+e.key,className:"radio-item",checked:e.key===t.state.key,onChange:t._changeImgType}),s.createElement("label",{htmlFor:"radio-"+e.key,className:"radio-item-label"},e.display))})))}})},{"./map":"/home/travis/build/satsummit/landscape/app/assets/scripts/components/map.js",lodash:"lodash",react:"react"}],"/home/travis/build/satsummit/landscape/app/assets/scripts/config.js":[function(t,e,a){"use strict";var s={logo:t("./config/logo.js"),mapbox:t("./config/mapbox.js"),production:t("./config/production.js"),staging:t("./config/staging.js")};for(var i in s.production)e.exports[i]=s.production[i];var o=s.local||{};for(var i in o||{})e.exports[i]=o[i]},{"./config/logo.js":"/home/travis/build/satsummit/landscape/app/assets/scripts/config/logo.js","./config/mapbox.js":"/home/travis/build/satsummit/landscape/app/assets/scripts/config/mapbox.js","./config/production.js":"/home/travis/build/satsummit/landscape/app/assets/scripts/config/production.js","./config/staging.js":"/home/travis/build/satsummit/landscape/app/assets/scripts/config/staging.js"}],"/home/travis/build/satsummit/landscape/app/assets/scripts/config/logo.js":[function(t,e,a){"use strict";var s=["╭──────────────────────────────────────╮","│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░░█░░█░░░░█░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░░██░░█░░██░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░░███░█░███░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░░███░████░░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░░███████░░░░░░█░░░█░░░░░│","│░░░░░░░░██░░░░░██████░░░░░██░░██░░░░░░│","│░░░░░█░░░██░░░░░█████░░░███░███░░░░░░░│","│░░░░░░██░░███░░░█████░░██████░░░░░░░░░│","│░░░░░░░░██░███░░█████░░████░░░░░░░░░░░│","│░░░░░░░░░██████░░████░███░░░░░░░░░░░░░│","│░░░░░░░░░░░░████░███░░█░░░░░░░░░░░░░░░│","│░░░░░░█████░░░░████░░░░░░░░░░░░░░░░░░░│","│░░░░░░░░██████░░░██░░░█░░░░░░░░░░░░░░░│","│░░░░░░░░░░░░████░█████░░░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░██████░░░░░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░░░░███░░░░░░░░░░░░░░░░░░│","╰──────────────────────────────────────╯"],i=[];s=s.map(function(t,e){return t.replace(/(^|[|│])|(░+)|(█+)/g,function(t,e,a,s){return e?(i.push("black"),"%c"+e):a?(i.push("#cf3f02"),"%c"+a):s||!t?(i.push("black"),"%c"+(s||"")):void 0})}).concat(["                                        ","%c           DEVELOPMENT SEED             "]).join("\n"),i=i.map(function(t){return"color: "+t}).concat(["color: #cf3f02; font-weight: bold"]),e.exports=[s].concat(i)},{}],"/home/travis/build/satsummit/landscape/app/assets/scripts/config/mapbox.js":[function(t,e,a){"use strict";e.exports={token:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w",banner:{id:"stateofsatellite.mmkokm4g",center:[-3.7194,-38.5059],zoom:15,scrollWheelZoom:!1,keyboard:!1,zoomControl:!1},secondBanner:{id:"stateofsatellite.n9behe7a",center:[.5225,33.3073],zoom:14,scrollWheelZoom:!1,keyboard:!1,zoomControl:!1},resolutionComparison:{maps:[{id:"stateofsatellite.ql2i6bt9",displayAttrib1:"Landsat",displayAttrib2:"15m",zoom:14,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"},{id:"stateofsatellite.mm0pljb0",displayAttrib1:"Blackbridge RapidEye",displayAttrib2:"5m",zoom:15,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"},{id:"stateofsatellite.8snvobt9",displayAttrib1:"Airbus Pleiades",displayAttrib2:"0.5m",zoom:18,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"},{id:"stateofsatellite.mm0pp69n",displayAttrib1:"DigitalGlobe WV3",displayAttrib2:"0.31m",zoom:19,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"}]},revisitComparison:{maps:[{id:"stateofsatellite.njdap1fi",displayAttrib1:"Growing JUN 15",displayAttrib2:"4.2m",zoom:14,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"},{id:"stateofsatellite.njdb4053",displayAttrib1:"Harvest AUG 15",displayAttrib2:"2.7m",zoom:14,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"},{id:"stateofsatellite.njdb6g05",displayAttrib1:"Post-harvest OCT 14",displayAttrib2:"4.2m",zoom:14,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"}]},ugandaResolutionComparison:{imgTypes:[{key:"ugandaResFalsecolor",display:"False Color"},{key:"ugandaResNdvi",display:"NDVI"},{key:"ugandaResTruecolor",display:"True Color"}],messages:[{sensorCon:"ugandaResAirbus5",imgCon:"ugandaResTruecolor",msgStr:"The SPOT-5 satellite does not capture reflectance in the visible-blue wavelength region, making it impossible to generate a true color composite using its imagery."}],maps:[{id:"ugandaResAirbus6",ugandaResTruecolor:"stateofsatellite.n9behe7a",ugandaResFalsecolor:"stateofsatellite.n9bf6j5l",ugandaResNdvi:"stateofsatellite.n9bepjed",displayAttrib1:"SPOT 6, Mar 2015",displayAttrib2:"1.5m",zoom:17,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"},{id:"ugandaResAirbus5",ugandaResTruecolor:"stateofsatellite.na0hk86f",ugandaResFalsecolor:"stateofsatellite.n9be8l9l",ugandaResNdvi:"stateofsatellite.n9bee6n6",displayAttrib1:"SPOT 5, Dec 2007",displayAttrib2:"2.5m",zoom:17,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"},{id:"ugandaResBlackbridge",ugandaResTruecolor:"stateofsatellite.n9bdifj5",ugandaResFalsecolor:"stateofsatellite.n9be41l7",ugandaResNdvi:"stateofsatellite.n9be0afe",displayAttrib1:"RapidEye, Jan 2012",displayAttrib2:"5m",zoom:17,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"}]},palawanRoadsComparison:{maps:[{id:"stateofsatellite.n9bbib3j",displayAttrib1:"Footpaths",displayAttrib2:"0.5m",zoom:19,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"},{id:"stateofsatellite.n9bcn84n",displayAttrib1:"Residential Roads",displayAttrib2:"1.5m",zoom:19,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"},{id:"stateofsatellite.n9bd59bm",displayAttrib1:"Secondary Roads",displayAttrib2:"2.5m",zoom:19,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"},{id:"stateofsatellite.n9bdabh7",displayAttrib1:"Primary Roads",displayAttrib2:"5m",zoom:19,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"}]},ugandaAgComparison:{imgTypes:[{key:"ugandaAgNdvi",display:"NDVI"},{key:"ugandaAgTruecolor",display:"True Color"}],maps:[{id:"ugandaAgJan",ugandaAgTruecolor:"stateofsatellite.n9i188po",ugandaAgNdvi:"stateofsatellite.n9i1dj49",displayAttrib1:"Jan Signature (SPOT 6)",zoom:15,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"},{id:"ugandaAgMarch",ugandaAgTruecolor:"stateofsatellite.n9i0k87l",ugandaAgNdvi:"stateofsatellite.n9i14027",displayAttrib1:"Mar Signature (RapidEye)",zoom:15,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"}]},nepalLandslideModel:{maps:[{id:"stateofsatellite.n9c6jfgk",displayAttrib1:"Landslide Model",zoom:8,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"},{id:"stateofsatellite.n9ion355",displayAttrib1:"Basemap",zoom:8,accessToken:"pk.eyJ1Ijoic3RhdGVvZnNhdGVsbGl0ZSIsImEiOiJlZTM5ODI5NGYwZWM2MjRlZmEyNzEyMWRjZWJlY2FhZiJ9.omsA8QDSKggbxiJjumiA_w"}]}}},{}],"/home/travis/build/satsummit/landscape/app/assets/scripts/config/production.js":[function(t,e,a){"use strict";var s=t("./logo");e.exports={consoleMessage:s}},{"./logo":"/home/travis/build/satsummit/landscape/app/assets/scripts/config/logo.js"}],"/home/travis/build/satsummit/landscape/app/assets/scripts/config/staging.js":[function(t,e,a){"use strict";e.exports={}},{}],"/home/travis/build/satsummit/landscape/app/assets/scripts/main.js":[function(t,e,a){"use strict";function s(t,e,a,s,i,o,n,r,l,c){function p(){u.getContainer().style.opacity=h.value,y.innerHTML=i+" Opacity: "+(100*h.value).toFixed(0)+"%"}L.mapbox.accessToken=t;var m=L.mapbox.map(e,"",{dragging:!1,touchZoom:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,zoomControl:!1});if(c){m.attributionControl=!1;var d=L.control.attribution();d.setPrefix(""),d.addAttribution(c),d.addTo(m)}L.mapbox.tileLayer(o).addTo(m);var u=L.mapbox.tileLayer(n).addTo(m),h=document.getElementById(a),y=document.getElementById(s);h["oninput"in h?"oninput":"onchange"]=p,m.on("move",p),m.setView(r,l)}var i=t("react");i.initializeTouchEvents(!0);var o=t("lodash"),n=t("./components/map"),r=t("./config/mapbox"),l=t("./components/capability-chart"),c=t("./components/capability-table"),p=t("../data/capability.json"),m=t("./components/resolution-comparison"),d=t("./components/toggled-resolution-comparison");o.each(p,function(t){t.platform=t.platform||"",t.company=t.company||"",t.name=t.company?t.platform?t.company+" "+t.platform:t.company:null});var u=t("./config");console.log.apply(console,u.consoleMessage),function(){var t=document.getElementById("banner-map"),e=r.banner;e.accessToken=r.token,i.render(i.createElement(n,{options:e,id:"banner-"+e.id,isStatic:!1}),t)}(),function(){var t=document.getElementById("banner-map-2"),e=r.secondBanner;e.accessToken=r.token,i.render(i.createElement(n,{options:e,id:"secondBanner-"+e.id,isStatic:!1}),t)}(),function(){var t=document.getElementById("capabilities");i.render(i.createElement(l,{data:p}),t)}(),function(){var t=document.getElementById("capabilities-table");i.render(i.createElement(c,{data:p}),t)}(),function(){var t=document.getElementById("resolution-comparison");i.render(i.createElement(m,{maps:r.resolutionComparison.maps,token:r.token,center:[-3.72596,-38.49375]}),t)}(),function(){var t=document.getElementById("revisit-comparison");i.render(i.createElement(m,{maps:r.revisitComparison.maps,token:r.token,center:[49.8744,-112.9654]}),t)}(),function(){var t=document.getElementById("toggled-resolution-comparison");i.render(i.createElement(d,{imgTypes:r.ugandaResolutionComparison.imgTypes,maps:r.ugandaResolutionComparison.maps,token:r.token,center:[.5037,33.2964],messages:r.ugandaResolutionComparison.messages}),t)}(),function(){var t=document.getElementById("palawan-roads-comparison");i.render(i.createElement(m,{maps:r.palawanRoadsComparison.maps,token:r.token,center:[10.14524,119.2151]}),t)}(),function(){var t=document.getElementById("uganda-agriculture-comparison");i.render(i.createElement(d,{imgTypes:r.ugandaAgComparison.imgTypes,maps:r.ugandaAgComparison.maps,token:r.token,center:[.5407,33.3211]}),t)}(),function(){var t='<a style="font-weight:bold;" href="https://sites.google.com/a/umich.edu/nepalearthquake/landslide-maps">Landslide study by the University of Michigan</a> | Imagery &copy <a href="https://www.digitalglobe.com/">DigitalGlobe</a>, &copy <a href="https://www.mapbox.com/about/maps/">Mapbox</a>';s(r.token,"landslide-model-map","landslide-model-range","landslide-model-opacity","Landslide Model","stateofsatellite.n9ion355","stateofsatellite.n9c6jfgk",[28.2899,85.3308],8,t)}(),$(function(){function t(t){var e=t.data("url");"undefined"!=typeof e&&("intro-nav"==e&&(e=""),window.location.hash=e)}var e=$(".nav-container"),a=$(".hero-block"),s=$("nav"),i=$("section"),o=$("nav a"),n=$(".inline-nav a");i.waypoint({handler:function(n,r){var l;l=$(this),"down"==r&&l[0].id==i[0].id&&(e.css({display:"inline"}),a.stop().css("top",0).animate({top:-a.outerHeight()}),s.stop().addClass("sticky").css("top",-s.outerHeight()-30).animate({top:0,opacity:1})),"up"==r&&l[0].id==i[0].id&&(a.stop().css("top",-a.outerHeight()).animate({top:"0"}),s.stop().css("top",0).animate({top:-s.outerHeight()-30,opacity:0})),"up"==r&&(l=l.prev());var c=$('nav a[href="#'+l.attr("id")+'"]');o.removeClass("selected"),c.addClass("selected"),t(l)},offset:"25%"}),$.merge(o,n).click(function(t){$.scrollTo($(this).attr("href"),{duration:200,offset:{left:0,top:-.15*$(window).height()}})})})},{"../data/capability.json":"/home/travis/build/satsummit/landscape/app/assets/data/capability.json","./components/capability-chart":"/home/travis/build/satsummit/landscape/app/assets/scripts/components/capability-chart.js","./components/capability-table":"/home/travis/build/satsummit/landscape/app/assets/scripts/components/capability-table.js","./components/map":"/home/travis/build/satsummit/landscape/app/assets/scripts/components/map.js","./components/resolution-comparison":"/home/travis/build/satsummit/landscape/app/assets/scripts/components/resolution-comparison.js","./components/toggled-resolution-comparison":"/home/travis/build/satsummit/landscape/app/assets/scripts/components/toggled-resolution-comparison.js","./config":"/home/travis/build/satsummit/landscape/app/assets/scripts/config.js","./config/mapbox":"/home/travis/build/satsummit/landscape/app/assets/scripts/config/mapbox.js",lodash:"lodash",react:"react"}]},{},["/home/travis/build/satsummit/landscape/app/assets/scripts/main.js"]);