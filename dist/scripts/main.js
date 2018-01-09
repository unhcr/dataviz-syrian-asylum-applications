"use strict";function sum(t,e){var o={};return Object.keys(t).forEach(function(a){e.hasOwnProperty(a)&&(o[a]=parseInt(t[a])+parseInt(e[a]))}),o}function sumObj(t){var e=0;for(var o in t)t.hasOwnProperty(o)&&"Month"!=o&&(e+=parseFloat(t[o]));return e}$("#popup").hide();var eu=0,monthStr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels=[{name:"Mediterranean Sea",lat:18.2,lon:34.2},{name:"Black Sea",lat:34.4,lon:43.1},{name:"North Sea",lat:2.98,lon:56.3},{name:"Norweigen Sea",lat:.7,lon:68.8},{name:"ATLANTIC OCEAN",lat:-12,lon:47}],query=[{CountryCode:"ALB",CountryName:"Albania",EU:"0",centroid_lat:"41.1435",centroid_lon:"20.0647",Total:"353",TotalEU:"0"},{CountryCode:"AUT",CountryName:"Austria",EU:"1",centroid_lat:"47.6",centroid_lon:"13.7833",Total:"50387",TotalEU:"50387"},{CountryCode:"BEL",CountryName:"Belgium",EU:"1",centroid_lat:"50.6413",centroid_lon:"4.65898",Total:"19384",TotalEU:"19384"},{CountryCode:"BIH",CountryName:"Bosnia and Herzegovina",EU:"0",centroid_lat:"44.168",centroid_lon:"17.7868",Total:"159",TotalEU:"0"},{CountryCode:"BGR",CountryName:"Bulgaria",EU:"1",centroid_lat:"42.75",centroid_lon:"25.5",Total:"20353",TotalEU:"20353"},{CountryCode:"CYP",CountryName:"Cyprus",EU:"1",centroid_lat:"35.0445",centroid_lon:"33.2193",Total:"5661",TotalEU:"5661"},{CountryCode:"CZE",CountryName:"Czech Republic",EU:"1",centroid_lat:"49.7388",centroid_lon:"15.3368",Total:"501",TotalEU:"501"},{CountryCode:"DNK",CountryName:"Denmark",EU:"1",centroid_lat:"55.72",centroid_lon:"12.57",Total:"20741",TotalEU:"20741"},{CountryCode:"EST",CountryName:"Estonia",EU:"1",centroid_lat:"58.6722",centroid_lon:"25.5469",Total:"45",TotalEU:"45"},{CountryCode:"FIN",CountryName:"Finland",EU:"1",centroid_lat:"62.6741",centroid_lon:"26",Total:"2770",TotalEU:"2770"},{CountryCode:"FRA",CountryName:"France",EU:"1",centroid_lat:"46.5611",centroid_lon:"2.55544",Total:"20348",TotalEU:"20348"},{CountryCode:"GBR",CountryName:"United Kingdom",EU:"1",centroid_lat:"52.4292",centroid_lon:"-1.23",Total:"11105",TotalEU:"11105"},{CountryCode:"DEU",CountryName:"Germany",EU:"1",centroid_lat:"51.5167",centroid_lon:"9.9167",Total:"518326",TotalEU:"518326"},{CountryCode:"GRC",CountryName:"Greece",EU:"1",centroid_lat:"39",centroid_lon:"22",Total:"20863",TotalEU:"20863"},{CountryCode:"HRV",CountryName:"Croatia",EU:"1",centroid_lat:"45.1112",centroid_lon:"16.4216",Total:"817",TotalEU:"817"},{CountryCode:"HUN",CountryName:"Hungary",EU:"1",centroid_lat:"47.1672",centroid_lon:"19.4131",Total:"77256",TotalEU:"77256"},{CountryCode:"ISL",CountryName:"Iceland",EU:"0",centroid_lat:"65",centroid_lon:"-18",Total:"109",TotalEU:"0"},{CountryCode:"IRL",CountryName:"Ireland",EU:"1",centroid_lat:"53",centroid_lon:"-8",Total:"633",TotalEU:"633"},{CountryCode:"ITA",CountryName:"Italy",EU:"1",centroid_lat:"42.9082",centroid_lon:"12.26",Total:"4846",TotalEU:"4846"},{CountryCode:"LIE",CountryName:"Liechtenstein",EU:"0",centroid_lat:"47.1388",centroid_lon:"9.55447",Total:"21",TotalEU:"0"},{CountryCode:"LTU",CountryName:"Lithuania",EU:"1",centroid_lat:"55.3347",centroid_lon:"23.8986",Total:"369",TotalEU:"369"},{CountryCode:"LUX",CountryName:"Luxembourg",EU:"1",centroid_lat:"49.7759",centroid_lon:"6.09343",Total:"1374",TotalEU:"1374"},{CountryCode:"LVA",CountryName:"Latvia",EU:"1",centroid_lat:"56.8588",centroid_lon:"24.9231",Total:"377",TotalEU:"377"},{CountryCode:"MKD",CountryName:"The former Yugoslav Republic of Macedonia",EU:"0",centroid_lat:"41.6",centroid_lon:"21.7",Total:"2327",TotalEU:"0"},{CountryCode:"MLT",CountryName:"Malta",EU:"1",centroid_lat:"35.8833",centroid_lon:"14.5",Total:"1890",TotalEU:"1890"},{CountryCode:"NLD",CountryName:"Netherlands",EU:"1",centroid_lat:"52.3167",centroid_lon:"5.55",Total:"33897",TotalEU:"33897"},{CountryCode:"NOR",CountryName:"Norway",EU:"1",centroid_lat:"61.27",centroid_lon:"8.78",Total:"15316",TotalEU:"15316"},{CountryCode:"POL",CountryName:"Poland",EU:"1",centroid_lat:"52.1224",centroid_lon:"19.4013",Total:"829",TotalEU:"829"},{CountryCode:"PRT",CountryName:"Portugal",EU:"1",centroid_lat:"39.4362",centroid_lon:"-8",Total:"1047",TotalEU:"1047"},{CountryCode:"ROU",CountryName:"Romania",EU:"1",centroid_lat:"45.8667",centroid_lon:"25.3",Total:"3809",TotalEU:"3809"},{CountryCode:"SRB",CountryName:"Serbia (and Kosovo: S/RES/1244(1999))",EU:"0",centroid_lat:"43.8167",centroid_lon:"21.1333",Total:"11892",TotalEU:"0"},{CountryCode:"ESP",CountryName:"Spain",EU:"1",centroid_lat:"40.4169",centroid_lon:"-3.7036",Total:"14830",TotalEU:"14830"},{CountryCode:"SVK",CountryName:"Slovakia",EU:"1",centroid_lat:"48.7062",centroid_lon:"19.4864",Total:"81",TotalEU:"81"},{CountryCode:"SVN",CountryName:"Slovenia",EU:"1",centroid_lat:"46.1209",centroid_lon:"14.8262",Total:"556",TotalEU:"556"},{CountryCode:"SWE",CountryName:"Sweden",EU:"1",centroid_lat:"63.0749",centroid_lon:"15.82",Total:"114585",TotalEU:"114585"},{CountryCode:"CHE",CountryName:"Switzerland",EU:"1",centroid_lat:"46.8333",centroid_lon:"8.333",Total:"15317",TotalEU:"15317"},{CountryCode:"MNE",CountryName:"Montenegro",EU:"0",centroid_lat:"42.7667",centroid_lon:"19.2167",Total:"3030",TotalEU:"0"}],countryEUArr=[];query.forEach(function(t,e){countryEUArr[t.CountryCode]=t.EU}),$.ajax({url:"https://ckanviz.swige.unhcr.org/api/action/datastore_search_sql?sql=SELECT%20*%20from%20%2286b73fc2-223a-41ff-a256-178dd525f33a%22%20order%20by%20%22Month%22%20asc",success:function(t){function e(t){var e=t.replace("COU_","");1==eu?$.each(N,function(o,a){a.CountryCode==e&&1==a.EU&&(d3.selectAll("#"+t).attr("class","hover"),d3.selectAll("#"+e).attr("class","hover_circle"),$("#popup .name").html(a.CountryName),$("#popup .figure").html(n(a.Total)),$("#popup").show())}):$.each(N,function(o,a){a.CountryCode==e&&(d3.selectAll("#"+t).attr("class","hover"),d3.selectAll("#"+e).attr("class","hover_circle"),$("#popup .name").html(a.CountryName),$("#popup .figure").html(n(a.Total)),$("#popup").show())})}function o(t){$("#popup").hide();var e=t.replace("COU_","");d3.selectAll("#"+t).attr("class",""),d3.selectAll("#"+e).attr("class","")}function a(){$("#map_total").addClass("rdiv_selected"),$("#map_total_eu").removeClass("rdiv_selected"),$("#note").text("Data for 37 European countries which provide monthly information to UNHCR. To the extent possible, the figures reflect first time asylum applications, but some of the statistics are likely to include repeated applications (same or different country).");var t=d3.sum(Y,function(t){return t.Total});$("#total").text(x),$("#totalYear").text(t);var e="between "+T+" and "+_,o="From "+T+" to "+_;return $("#total_label").text(e),$("#subtitle").text(o),eu=0,$.each(query,function(t,e){d3.selectAll("#COU_"+e.CountryCode).transition().duration(1500).attr("fill","#FAFAFA"),d3.selectAll("#"+e.CountryCode).attr("opacity","1")}),B.data(N).transition().duration(1200).attr("r",function(t){return H(t.Total)>0?H(t.Total):0}).attr("opacity",function(t){return t.Total>0?1:0}),K.series[0].data[0].update({y:q},!1),K.series[0].data[1].update({y:G},!1),K.series[0].data[2].update({y:j},!1),K.redraw(),$("#t1_str").text("Germany & Sweden"),$("#t2_str").text("Hungary, Austria, Netherlands, Greece, Denmark"),$("#t3_str").text("All others"),J.series[3].setVisible(!1,!1),J.series[2].setVisible(!1,!1),J.series[1].setVisible(!0,!1),J.series[0].setVisible(!0,!1),J.redraw(),!1}function r(){$("#map_total_eu").addClass("rdiv_selected"),$("#map_total").removeClass("rdiv_selected"),$("#note").text("Data for the 28 EU Member States plus Norway and Switzerland (EU+). To the extent possible, the figures reflect first time asylum applications, but some of the statistics are likely to include repeated applications (same or different country).");var t=d3.sum(Y,function(t){return t.TotalEU});$("#total").text(w),$("#totalYear").text(t);var e="between "+T+" and "+_,o="From "+T+" to "+_;return $("#total_label").text(e),$("#subtitle").text(o),eu=1,B.transition().duration(1200).attr("r",function(t){return H(t.TotalEU)>0?H(t.TotalEU):0}),$.each(query,function(t,e){1==e.EU?(d3.selectAll("#COU_"+e.CountryCode).transition().duration(1500).attr("fill","#FAFAFA"),d3.selectAll("#"+e.CountryCode).attr("opacity","1")):(d3.selectAll("#COU_"+e.CountryCode).transition().duration(1500).attr("fill","#d6d8d7"),d3.selectAll("#"+e.CountryCode).transition().duration(1500).attr("opacity","0").attr("r","0"))}),K.series[0].data[0].update({y:V},!1),K.series[0].data[1].update({y:W},!1),K.series[0].data[2].update({y:P},!1),K.redraw(),$("#t1_str").text("Germany & Sweden"),$("#t2_str").text("Hungary, Austria, Netherlands, Greece, Denmark"),$("#t3_str").text("All others"),J.series[0].setVisible(!1,!1),J.series[1].setVisible(!1,!1),J.series[2].setVisible(!0,!1),J.series[3].setVisible(!0,!1),J.redraw(),!1}function n(t){var e=t.toString().split(".");return e[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")+(e[1]?"."+e[1]:"")}var l=(t.result.total,t.result.records);l=l.filter(function(t){return t.Month.length>0});var i={},d={},s=[],c=0,u=[],p=[],y=0,C=0,h={};h.totalNC=[],h.totalNCEU=[],h.total=[],h.totalEU=[],l.forEach(function(t){var e=t.Month;u.push(e),delete t._id,delete t._full_text,i[e+"-01"]=c>0?sum(t,s):t,d[e+"-01"]=t,c=1,s=i[e+"-01"];var o=0,a=0;for(var r in t)t.hasOwnProperty(r)&&"_id"!=r&&"_full_text"!=r&&"Month"!=r&&(o=parseInt(o)+parseInt(t[r]),1==countryEUArr[r]&&(a=parseInt(a)+parseInt(t[r])));p[e+"-01"]={totalNC:o,totalNCEU:a,total:o+y,totalEU:a+C},h.totalNC.push({x:new Date(e+"-01"),y:o}),h.totalNCEU.push({x:new Date(e+"-01"),y:a}),h.total.push({x:new Date(e+"-01"),y:o+y}),h.totalEU.push({x:new Date(e+"-01"),y:a+C}),y=o+y,C=a+C});var m=i,f=m[Object.keys(m)[Object.keys(m).length-1]];query.forEach(function(t,e){t.Total=f[t.CountryCode],1==t.EU&&(t.TotalEU=f[t.CountryCode])});var E=d3.min(u,function(t){return t}),U=d3.max(u,function(t){return t}),_=monthStr[new Date(U).getMonth()]+" "+new Date(U).getFullYear(),T=monthStr[new Date(E).getMonth()]+" "+new Date(E).getFullYear(),b=new Date(U).getFullYear();new Date(E).getFullYear();$("#latestYear").text(b);var g=query,N=[];g.forEach(function(t,e){var o={};o.Total=f[t.CountryCode],1==t.EU&&(o.TotalEU=f[t.CountryCode]),o.CountryCode=t.CountryCode,o.CountryName=t.CountryName,o.EU=t.EU,o.centroid_lat=t.centroid_lat,o.centroid_lon=t.centroid_lon,N.push(o)});var v=Math.max.apply(Math,query.map(function(t){return t.Total})),x=d3.sum(query,function(t){return t.Total}),w=d3.sum(query,function(t){return t.TotalEU}),A=l.filter(function(t){return new Date(t.Month).getFullYear()==b}),s=[],c=0,u=[],i={},S=$("#map").width(),D=$("#map").width(),k=$("#map").height(),M=d3.select("#map").append("svg").attr("preserveAspectRatio","xMidYMid").attr("viewBox","0 0 "+D+" "+k).attr("width",S).attr("height",S*k/D),O=D/.86,L=d3.geo.azimuthalEquidistant().scale(O).center([16.8,52.6]).translate([D/2,k/2]),F=d3.geo.path().projection(L),H=d3.scale.sqrt().domain([0,v]).range([0,30]),R=M.append("g");d3.json("scripts/world.json",function(t,r){var n=topojson.feature(r,r.objects.un_world);R.append("g").attr("id","countries").selectAll("path").data(n.features).enter().append("path").attr("id",function(t){return"COU_"+t.id}).attr("class","country").attr("fill",function(t){return"SYR"==t.id?"#dbcdcc":"#d6d8d7"}).attr("stroke","#bdbfbe").attr("stroke-width",1).attr("d",F).on("mouseover",function(){e(this.id)}).on("mouseout",function(){o(this.id)}),a()});var z=M.append("g"),B=z.selectAll("circle").data(N).enter().append("circle").attr("cx",function(t){return L([t.centroid_lon,t.centroid_lat])[0]}).attr("cy",function(t){return L([t.centroid_lon,t.centroid_lat])[1]}).attr("r",function(t){return H(t.Total)}).attr("id",function(t){return t.CountryCode}).attr("stroke","#b96e93").attr("stroke-width",1.5).attr("class","circle").attr("fill","#b96e93").attr("fill-opacity",.4).on("mouseover",function(){e("COU_"+this.id)}).on("mouseout",function(){o("COU_"+this.id)});M.selectAll(".placelabel").data(labels).enter().append("text").attr("class","placelabel").attr("transform",function(t){return"translate("+L([t.lat,t.lon])+")"}).attr("dy",".30em").attr("text-anchor","middle").text(function(t){return t.name}),A.forEach(function(t){var e=t.Month;delete t._id,delete t.Month,delete t._full_text,i[e+"-01"]=c>0?sum(t,s):t,c=1,s=i[e+"-01"]}),delete f.Month;var I=i[Object.keys(i)[Object.keys(i).length-1]],Y=query;Y.forEach(function(t,e){t.Total=I[t.CountryCode],1==t.EU&&(t.TotalEU=I[t.CountryCode])}),$(window).resize(function(){var t=$("#map").width();M.attr("width",t),M.attr("height",t*k/D)}),$("#map").mousemove(function(t){var e=$("#map"),o=e.offset();$("#popup").css("left",t.pageX-o.left+20),$("#popup").css("top",t.pageY-o.top+5)});var q=f.DEU+f.SWE,G=f.AUT+f.HUN+f.NLD+f.GRC+f.DNK,j=x-q-G,V=f.DEU+f.SWE,W=f.AUT+f.HUN+f.NLD+f.GRC+f.DNK,P=w-V-W,K=new Highcharts.Chart({chart:{renderTo:"piechart",type:"pie",animation:!1,backgroundColor:"rgba(255, 255, 255, 0.0)",plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,marginBottom:0,marginLeft:0,marginRight:0,marginTop:5,spacingTop:0,spacingBottom:0,spacingLeft:0,spacingRight:0},title:{text:""},credits:{enabled:!1},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>",enabled:!1},plotOptions:{pie:{size:"100%",showInLegend:!1,startAngle:0,allowPointSelect:!1,cursor:"pointer",center:["45%","50%"],dataLabels:{distance:-25,style:{width:"40px",color:"#000",fontColor:"#000"},enabled:!0,softConnector:!1,connectorColor:"grey",format:'<span style="font-size: 10px; color: #000; font-weight: bold;">{point.percentage:.0f} %</span>'}}},legend:{enabled:!0},series:[{type:"pie",data:[{name:"Germany & Sweden",color:"#8c3b65",y:q},{name:"Next Top 5: Hungary, Austria, Netherlands, Greece, Denmark",color:"#d6b3c3",y:G},{name:"All others",color:"#cacccb",y:j}]}]}),J=new Highcharts.Chart({chart:{renderTo:"linechart",animation:!1,backgroundColor:"rgba(255, 255, 255, 0.0)",type:"area",marginBottom:45,marginRight:45},xAxis:{type:"datetime",dateTimeLabelFormats:{second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b-%y",year:"%b %Y"}},title:{text:""},yAxis:{title:{text:""},opposite:!0,gridLineWidth:.5,lineColor:"#666",tickColor:"#666",tickWidth:0,labels:{y:3,formatter:function(){return n(this.value/1e3)+"k"},enabled:!0,style:{color:"#666",font:"10px Arial"}}},legend:{enabled:!1},credits:{enabled:!1},tooltip:{shared:!0,crosshairs:!0,enabled:!0,shadow:!1,animation:!0,borderRadius:2,borderWidth:0,useHTML:!0,hideDelay:0,style:{color:"#333333",padding:"0px",font:"9px Arial",lineHeight:"1.5",textAlign:"center"},formatter:function(){var t='<div style="font-size: 10px; background-color: #5C5C5C; border: 1px #333333 solid; color: white;padding: 0px 3px 0px 2px; z-index: 555"><table cellspacing="0" cellpadding="1px" class="linetooltip" width="150px">';return $.each(this.points,function(e,o){"Monthly"!=o.series.name&&"Cumulative"!=o.series.name||(t=t+'<tr><td style="font-weight: normal; font-size: 9px"><span style="background-color: '+o.series.color+'; border: 1px solid grey; margin-right: 3px">&nbsp;&nbsp;</span>'+o.series.name+"</td>",t=t+'<td><span style="font-size: 7px; color:#D6D6D6;">'+Highcharts.dateFormat("%b 20%y",o.x)+'</span></td><td align="right"><b>'+n(o.y)+"</b></td></tr>");var a=Highcharts.dateFormat("20%y-%m-01",o.x);m[a]&&$.each(m[a],function(t,e){e.EU,d3.selectAll("#"+t).attr("r",function(){return H(e)>0?H(e):0})})}),t+="</table></div>"}},plotOptions:{series:{animation:!1},area:{fillOpacity:.1,smoothed:!0,lineWidth:1.7,strokeOpacity:.1,animation:!1,dataLabels:{enabled:!0,color:"grey",y:-25,formatter:function(){if("Jun"==Highcharts.dateFormat("%b",new Date(this.x)))return"<div style='color: red;'>20"+Highcharts.dateFormat("%y",new Date(this.x))+"</div>"}},marker:{enabled:!0,symbol:"square",radius:2,states:{hover:{enabled:!0,radius:3}}},shadow:{color:"#808080",width:3,opacity:.02,offsetY:4,offsetX:0},states:{hover:{lineWidth:1.5}}},line:{fillOpacity:.1,fillColor:"rgba(0,0,0,0.1)",lineColor:"grey",smoothed:!1,lineWidth:1,strokeOpacity:.1,marker:{enabled:!0,symbol:"square",fillColor:"#8c3b65",radius:2,states:{hover:{enabled:!0,radius:3}}},shadow:{color:"#808080",width:3,opacity:.02,offsetY:4,offsetX:0},states:{hover:{lineWidth:1.5}}},column:{pointPadding:0,borderWidth:1.2,borderColor:"#414141"}},series:[{type:"area",color:"#8c3b65",name:"Cumulative",data:h.total},{type:"column",color:"#474747",name:"Monthly",data:h.totalNC},{type:"area",color:"#8c3b65",name:"Cumulative",data:h.totalEU},{type:"column",color:"#474747",name:"Monthly",data:h.totalNC}]});J.series[2].hide(),J.series[3].hide(),$(document).ready(function(){$("#map_total").on("click",a),$("#map_total_eu").on("click",r);var t=($("#map").height(),$(".rightpanel").height()),e=($("#linechart").height(),$(".linechart").position()),o=(e.top,$("#linechart").height(),$(".container").width());o<=872?($("#buttonhelper").hide(),$(".buttonsub").css("font-size","8px")):($("#buttonhelper").show(),$(".buttonsub").show()),o>360&&$(".buttonsub").css("font-size","10px"),o<300&&($("#total").css("font-size","35px"),$("#totalYear").css("font-size","28px"))}),function(){var t=J.tooltip.hide;J.tooltip.hide=function(){var e=t.apply(this,arguments);return 0==eu?B.transition().delay(700).duration(800).attr("r",function(t){return H(t.Total)>0?H(t.Total):0}):B.transition().delay(700).duration(800).attr("r",function(t){return H(t.TotalEU)>0?H(t.TotalEU):0}),e}}()}});