//**************************
// MAP
//**************************

$('#popup').hide();

var eu = 0;

var monthStr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var labels = [
{name: 'Mediterranean Sea', lat: 18.2, lon: 34.2}, 
{name: 'Black Sea', lat: 34.4, lon: 43.1}, 
{name: 'North Sea', lat: 2.98, lon: 56.3}, 
{name: 'Norweigen Sea', lat: 0.7, lon: 68.8}, 
{name: 'ATLANTIC OCEAN', lat: -12, lon: 47},
];

var query = [{'CountryCode':'ALB','CountryName':'Albania','EU':'0','centroid_lat':'41.1435','centroid_lon':'20.0647','Total':'353','TotalEU':'0'},{'CountryCode':'AUT','CountryName':'Austria','EU':'1','centroid_lat':'47.6','centroid_lon':'13.7833','Total':'50387','TotalEU':'50387'},{'CountryCode':'BEL','CountryName':'Belgium','EU':'1','centroid_lat':'50.6413','centroid_lon':'4.65898','Total':'19384','TotalEU':'19384'},{'CountryCode':'BIH','CountryName':'Bosnia and Herzegovina','EU':'0','centroid_lat':'44.168','centroid_lon':'17.7868','Total':'159','TotalEU':'0'},{'CountryCode':'BGR','CountryName':'Bulgaria','EU':'1','centroid_lat':'42.75','centroid_lon':'25.5','Total':'20353','TotalEU':'20353'},{'CountryCode':'CYP','CountryName':'Cyprus','EU':'1','centroid_lat':'35.0445','centroid_lon':'33.2193','Total':'5661','TotalEU':'5661'},{'CountryCode':'CZE','CountryName':'Czech Republic','EU':'1','centroid_lat':'49.7388','centroid_lon':'15.3368','Total':'501','TotalEU':'501'},{'CountryCode':'DNK','CountryName':'Denmark','EU':'1','centroid_lat':'55.72','centroid_lon':'12.57','Total':'20741','TotalEU':'20741'},{'CountryCode':'EST','CountryName':'Estonia','EU':'1','centroid_lat':'58.6722','centroid_lon':'25.5469','Total':'45','TotalEU':'45'},{'CountryCode':'FIN','CountryName':'Finland','EU':'1','centroid_lat':'62.6741','centroid_lon':'26','Total':'2770','TotalEU':'2770'},{'CountryCode':'FRA','CountryName':'France','EU':'1','centroid_lat':'46.5611','centroid_lon':'2.55544','Total':'20348','TotalEU':'20348'},{'CountryCode':'GBR','CountryName':'United Kingdom','EU':'1','centroid_lat':'52.4292','centroid_lon':'-1.23','Total':'11105','TotalEU':'11105'},{'CountryCode':'DEU','CountryName':'Germany','EU':'1','centroid_lat':'51.5167','centroid_lon':'9.9167','Total':'518326','TotalEU':'518326'},{'CountryCode':'GRC','CountryName':'Greece','EU':'1','centroid_lat':'39','centroid_lon':'22','Total':'20863','TotalEU':'20863'},{'CountryCode':'HRV','CountryName':'Croatia','EU':'1','centroid_lat':'45.1112','centroid_lon':'16.4216','Total':'817','TotalEU':'817'},{'CountryCode':'HUN','CountryName':'Hungary','EU':'1','centroid_lat':'47.1672','centroid_lon':'19.4131','Total':'77256','TotalEU':'77256'},{'CountryCode':'ISL','CountryName':'Iceland','EU':'0','centroid_lat':'65','centroid_lon':'-18','Total':'109','TotalEU':'0'},{'CountryCode':'IRL','CountryName':'Ireland','EU':'1','centroid_lat':'53','centroid_lon':'-8','Total':'633','TotalEU':'633'},{'CountryCode':'ITA','CountryName':'Italy','EU':'1','centroid_lat':'42.9082','centroid_lon':'12.26','Total':'4846','TotalEU':'4846'},{'CountryCode':'LIE','CountryName':'Liechtenstein','EU':'0','centroid_lat':'47.1388','centroid_lon':'9.55447','Total':'21','TotalEU':'0'},{'CountryCode':'LTU','CountryName':'Lithuania','EU':'1','centroid_lat':'55.3347','centroid_lon':'23.8986','Total':'369','TotalEU':'369'},{'CountryCode':'LUX','CountryName':'Luxembourg','EU':'1','centroid_lat':'49.7759','centroid_lon':'6.09343','Total':'1374','TotalEU':'1374'},{'CountryCode':'LVA','CountryName':'Latvia','EU':'1','centroid_lat':'56.8588','centroid_lon':'24.9231','Total':'377','TotalEU':'377'},{'CountryCode':'MKD','CountryName':'The former Yugoslav Republic of Macedonia','EU':'0','centroid_lat':'41.6','centroid_lon':'21.7','Total':'2327','TotalEU':'0'},{'CountryCode':'MLT','CountryName':'Malta','EU':'1','centroid_lat':'35.8833','centroid_lon':'14.5','Total':'1890','TotalEU':'1890'},{'CountryCode':'NLD','CountryName':'Netherlands','EU':'1','centroid_lat':'52.3167','centroid_lon':'5.55','Total':'33897','TotalEU':'33897'},{'CountryCode':'NOR','CountryName':'Norway','EU':'1','centroid_lat':'61.27','centroid_lon':'8.78','Total':'15316','TotalEU':'15316'},{'CountryCode':'POL','CountryName':'Poland','EU':'1','centroid_lat':'52.1224','centroid_lon':'19.4013','Total':'829','TotalEU':'829'},{'CountryCode':'PRT','CountryName':'Portugal','EU':'1','centroid_lat':'39.4362','centroid_lon':'-8','Total':'1047','TotalEU':'1047'},{'CountryCode':'ROU','CountryName':'Romania','EU':'1','centroid_lat':'45.8667','centroid_lon':'25.3','Total':'3809','TotalEU':'3809'},{'CountryCode':'SRB','CountryName':'Serbia (and Kosovo: S\/RES\/1244(1999))','EU':'0','centroid_lat':'43.8167','centroid_lon':'21.1333','Total':'11892','TotalEU':'0'},{'CountryCode':'ESP','CountryName':'Spain','EU':'1','centroid_lat':'40.4169','centroid_lon':'-3.7036','Total':'14830','TotalEU':'14830'},{'CountryCode':'SVK','CountryName':'Slovakia','EU':'1','centroid_lat':'48.7062','centroid_lon':'19.4864','Total':'81','TotalEU':'81'},{'CountryCode':'SVN','CountryName':'Slovenia','EU':'1','centroid_lat':'46.1209','centroid_lon':'14.8262','Total':'556','TotalEU':'556'},{'CountryCode':'SWE','CountryName':'Sweden','EU':'1','centroid_lat':'63.0749','centroid_lon':'15.82','Total':'114585','TotalEU':'114585'},{'CountryCode':'CHE','CountryName':'Switzerland','EU':'1','centroid_lat':'46.8333','centroid_lon':'8.333','Total':'15317','TotalEU':'15317'},{'CountryCode':'MNE','CountryName':'Montenegro','EU':'0','centroid_lat':'42.7667','centroid_lon':'19.2167','Total':'3030','TotalEU':'0'}];

// refresh totals in original query
var countryEUArr = [];

query.forEach(function(d,i){
    countryEUArr[d.CountryCode] = d.EU;
});

$.ajax({
    url: 'https://ckanviz.swige.unhcr.org/api/action/datastore_search_sql?sql=SELECT%20*%20from%20%2286b73fc2-223a-41ff-a256-178dd525f33a%22%20order%20by%20%22Month%22%20asc',
    success: function(response) {
        var records = response.result.total;
        var dataArray = response.result.records;

        // filter out any null rows
        dataArray = dataArray.filter(function(d){
            return d.Month.length > 0;
        });

        //**************************
        // HOW TO ROLL-UP AND NEST THE DATA FOR THE LINE CHART ??!!
        // both eu/non-eu and cumulative/non-cumultive
        //**************************

        var data = {};
        var dataNC = {}; // non-cumulative

        var dataPrev = []; 
        var init = 0;
        var monthArray = [];
        var monthTotals = [];
        var totalPrev = 0;
        var totalEUPrev = 0;
        var monthData = {};
        monthData.totalNC = [];
        monthData.totalNCEU = [];
        monthData.total = [];
        monthData.totalEU = [];

        // parse through data and get cumuative and non-cumulative totals. 
        dataArray.forEach(function(d){
            var month = d.Month; 
            monthArray.push(month);
            delete d._id;
            delete d._full_text;

            if(init > 0 ){
                data[month+'-01'] = sum(d, dataPrev);            
            } else {
                data[month+'-01'] = d;
            }

            dataNC[month+'-01'] = d;
            init = 1;
            dataPrev = data[month+'-01'];

            var total = 0;
            var totalEU = 0;

            for (var key in d) {
                if (d.hasOwnProperty(key)) {
                    if((key!='_id')&&(key!='_full_text')&&(key!='Month')){
                        total = parseInt(total) + parseInt(d[key]);
                        if(countryEUArr[key]==1){
                          totalEU = parseInt(totalEU) + parseInt(d[key]);  
                        }
                    }
                }
            }

            monthTotals[month+'-01'] = {'totalNC': total, 'totalNCEU': totalEU, 'total': (total + totalPrev), 'totalEU': (totalEU + totalEUPrev)};
            
            monthData.totalNC.push({x: new Date(month+'-01'), y: total });
            monthData.totalNCEU.push({x: new Date(month+'-01'), y: totalEU });
            monthData.total.push({x: new Date(month+'-01'), y: total + totalPrev });
            monthData.totalEU.push({x: new Date(month+'-01'), y: totalEU + totalEUPrev });
            
            totalPrev = total + totalPrev;
            totalEUPrev = totalEU + totalEUPrev;

        });

        var mapMonth = data;

        var latestRecord = mapMonth[Object.keys(mapMonth)[Object.keys(mapMonth).length - 1]];

        // refresh totals in original query
        query.forEach(function(d,i){
            d.Total = latestRecord[d.CountryCode];
            if(d.EU==1){
                d.TotalEU = latestRecord[d.CountryCode];
            }
        });

        var minMonth = d3.min(monthArray, function(d){
            return d;
        });

        var maxMonth = d3.max(monthArray, function(d){
            return d;
        });

        var maxMonthStr = monthStr[new Date(maxMonth).getMonth()] + ' ' + new Date(maxMonth).getFullYear();
        var minMonthStr = monthStr[new Date(minMonth).getMonth()] + ' ' + new Date(minMonth).getFullYear();
        var maxYear = new Date(maxMonth).getFullYear();
        var minYear = new Date(minMonth).getFullYear();

        $('#latestYear').text(maxYear);

        var cumulativeQuery = query; 

        var mapArray = [];
        // refresh totals in original query
        cumulativeQuery.forEach(function(d,i){

            var x = {};

            x.Total = latestRecord[d.CountryCode];

            if(d.EU==1){
                x.TotalEU = latestRecord[d.CountryCode];
            }

            x.CountryCode = d.CountryCode; 
            x.CountryName = d.CountryName
            x.EU = d.EU;
            x.centroid_lat = d.centroid_lat;
            x.centroid_lon = d.centroid_lon;

            mapArray.push(x);

        });

        var max = Math.max.apply(Math,query.map(function(o){return o.Total;}));

        var grandTotal = d3.sum(query, function(d){
            return d.Total;
        });

        var grandEUTotal = d3.sum(query, function(d){
            return d.TotalEU;
        });

        // get latest year totals
        var latestYearArray = dataArray.filter(function(d){
            return new Date(d.Month).getFullYear() == maxYear;
        });

  


        var dataPrev = []; 
        var init = 0;
        var monthArray = [];
        var data = {};

    var m_width = $('#map').width(),
    width = $('#map').width(),
    height = $('#map').height();

    var svg = d3.select('#map').append('svg')
    .attr('preserveAspectRatio', 'xMidYMid')
    .attr('viewBox', '0 0 ' + width + ' ' + height)
    .attr('width', m_width)
    .attr('height', m_width * height / width);

    var scale = width/0.9;

    var projection = d3.geo.azimuthalEquidistant()
    .scale(scale)
    .center([16, 52])
    .translate([((width ) / 2), height / 2]);

    var path = d3.geo.path()
    .projection(projection);

    var maxCircle = 30;

    var r = d3.scale.sqrt()
    .domain([0, max])
    .range([0, maxCircle]);

    var g = svg.append('g'); 

    d3.json('scripts/world.json', function(error, data) {
        var mapdata = topojson.feature(data, data.objects.un_world);

        g.append('g')
        .attr('id', 'countries')
        .selectAll('path')
        .data(mapdata.features)
        .enter()
        .append('path')
        .attr('id', function(d) {
            return 'COU_'+d.id;
        })
        .attr('class', 'country')
        .attr('fill', function(d){if(d.id=='SYR'){return '#dbcdcc';}else{return '#d6d8d7';}})
        .attr('stroke', '#bdbfbe')
        .attr('stroke-width', 1)
        .attr('d', path)
        .on('mouseover', function() {
            hover(this.id);
        })
        .on('mouseout', function() {
            hover_off(this.id);
        })

        mapTotal();

    });

    var circles_group = svg.append('g'); 

    var circles = circles_group.selectAll('circle')
    .data(mapArray)
    .enter()
    .append('circle')
    .attr('cx', function (d) { return projection([d.centroid_lon, d.centroid_lat ])[0] })
    .attr('cy', function (d) { return projection([d.centroid_lon, d.centroid_lat ])[1] })
    .attr('r', function (d) { return r(d.Total) })
    .attr('id', function(d) {
        return d.CountryCode;
    })
    .attr('stroke', '#b96e93')
    .attr('stroke-width', 1.5)
    .attr('class', 'circle')
    .attr('fill', '#b96e93')
    .attr('fill-opacity', 0.4)
    .on('mouseover', function() {
        hover('COU_'+this.id);
    })
    .on('mouseout', function() {
        hover_off('COU_'+this.id);
    })
    ;

    // add some labels

    svg.selectAll('.placelabel')
    .data(labels)
    .enter()
    .append('text')
    .attr('class', 'placelabel')
    .attr('transform', function(d) { return 'translate(' + projection([d.lat,d.lon]) + ')'; })
    .attr('dy', '.30em')
    .attr('text-anchor', 'middle')
    .text(function(d) { return d.name });

    function hover(country_id){
        var id = country_id.replace('COU_', '');

        if(eu==1){
         $.each(mapArray, function (index, data) {
            if((data.CountryCode == id)&&(data.EU==1)){
             d3.selectAll('#'+country_id)
             .attr('class', 'hover');

             d3.selectAll('#'+id)
             .attr('class', 'hover_circle');

             $('#popup .name').html(data.CountryName);
             $('#popup .figure').html(numberFormat(data.Total));
             $('#popup').show();

         }
     });
     } else {
         $.each(mapArray, function (index, data) {

            if(data.CountryCode == id){

             d3.selectAll('#'+country_id)
             .attr('class', 'hover');

             d3.selectAll('#'+id)
             .attr('class', 'hover_circle');

             $('#popup .name').html(data.CountryName);
             $('#popup .figure').html(numberFormat(data.Total));
             $('#popup').show();
         }
     });
     }

    }


             // parse through data and get latest year totals
        latestYearArray.forEach(function(d){
            var month = d.Month; 
            delete d._id;
            delete d.Month;
            delete d._full_text;
            if(init > 0 ){
                data[month+'-01'] = sum(d, dataPrev);            
            } else {
                data[month+'-01'] = d;
            }
            init = 1;
            dataPrev = data[month+'-01'];
        });

        delete latestRecord.Month;
        var latestYearRecord = data[Object.keys(data)[Object.keys(data).length - 1]];

        var latestYearQuery = query;

        // refresh totals in original query
        latestYearQuery.forEach(function(d,i){
            d.Total = latestYearRecord[d.CountryCode];
            if(d.EU==1){
                d.TotalEU = latestYearRecord[d.CountryCode];
            }
        });

    function hover_off(country_id){
        $('#popup').hide();
        var id = country_id.replace('COU_', '');

        d3.selectAll('#'+country_id)
        .attr('class', '');

        d3.selectAll('#'+id)
        .attr('class', '');
    }

    function mapTotal(){

        $('#map_total').addClass('rdiv_selected');
        $('#map_total_eu').removeClass('rdiv_selected');

        $('#note').text('Data for 37 European countries which provide monthly information to UNHCR. To the extent possible, the figures reflect first time asylum applications, but some of the statistics are likely to include repeated applications (same or different country).');

        var totalYear = d3.sum(latestYearQuery, function(d){
            return d.Total;
        });

        $('#total').text(grandTotal);
        $('#totalYear').text(totalYear);

        var between = 'between ' + minMonthStr + ' and ' + maxMonthStr;
        var subtitle = 'From ' + minMonthStr + ' to ' + maxMonthStr;

        $('#total_label').text(between);
        $('#subtitle').text(subtitle);

        eu = 0;

        $.each(query, function (index, data) {
            d3.selectAll('#COU_'+data.CountryCode)
            .transition()
            .duration(1500)
            .attr('fill', '#FAFAFA');

            d3.selectAll('#'+data.CountryCode)
            .attr('opacity', '1');

        });

        circles.data(mapArray).transition().duration(1200).attr('r', function (d) {if(r(d.Total)>0) { return r(d.Total) } else { return 0; } })
        .attr('opacity', function(d){
            if(d.Total>0){ return 1; } else { return 0; };
        });

       // update piechart
       pie.series[0].data[0].update({y: top2}, false);
       pie.series[0].data[1].update({y: top5}, false);
       pie.series[0].data[2].update({y: others}, false);
       pie.redraw();

       $('#t1_str').text('Germany & Sweden');
       $('#t2_str').text('Hungary, Austria, Netherlands, Greece, Denmark');
       $('#t3_str').text('All others');

       chart.series[3].setVisible (false, false);
       chart.series[2].setVisible (false, false);
       chart.series[1].setVisible (true, false);
       chart.series[0].setVisible (true, false);
       chart.redraw();

       return false;
    }

    function mapTotalEu(){

        $('#map_total_eu').addClass('rdiv_selected');
        $('#map_total').removeClass('rdiv_selected');
        $('#note').text('Data for the 28 EU Member States plus Norway and Switzerland (EU+). To the extent possible, the figures reflect first time asylum applications, but some of the statistics are likely to include repeated applications (same or different country).');

        var totalYear = d3.sum(latestYearQuery, function(d){
            return d.TotalEU;
        });

        $('#total').text(grandEUTotal);
        $('#totalYear').text(totalYear);
        var between = 'between ' + minMonthStr + ' and ' + maxMonthStr;
        var subtitle = 'From ' + minMonthStr + ' to ' + maxMonthStr;

        $('#total_label').text(between);
        $('#subtitle').text(subtitle);

        eu = 1;

        circles.transition().duration(1200).attr('r', function (d) { if(r(d.TotalEU)>0) { return r(d.TotalEU) } else { return 0; } });

        $.each(query, function (index, data) {
            if(data.EU ==1){
                d3.selectAll('#COU_'+data.CountryCode)
                .transition()
                .duration(1500)
                .attr('fill', '#FAFAFA');

                d3.selectAll('#'+data.CountryCode)
                .attr('opacity', '1');

            } else {
                d3.selectAll('#COU_'+data.CountryCode)
                .transition()
                .duration(1500)
                .attr('fill', '#d6d8d7');

                d3.selectAll('#'+data.CountryCode)
                .transition()
                .duration(1500)
                .attr('opacity', '0')
                .attr('r', '0');

            }
        })

       // update piechart
       pie.series[0].data[0].update({y: topEU2}, false);
       pie.series[0].data[1].update({y: topEU5}, false);
       pie.series[0].data[2].update({y: othersEU}, false);
       pie.redraw();

       $('#t1_str').text('Germany & Sweden');
       $('#t2_str').text('Hungary, Austria, Netherlands, Greece, Denmark');
       $('#t3_str').text('All others');

       chart.series[0].setVisible (false, false);
       chart.series[1].setVisible (false, false);
       chart.series[2].setVisible (true, false);
       chart.series[3].setVisible (true, false);
       chart.redraw();

       return false;
    }

    $(window).resize(function() {
        var w = $('#map').width();
        svg.attr('width', w);
        svg.attr('height', w * height / width);
    });

    $('#map').mousemove(function(event){
        var m = $('#map');
        var offset = m.offset();
        $('#popup').css('left', event.pageX-offset.left+20);
        $('#popup').css('top', event.pageY-offset.top+5);
    });

    function numberFormat(n) {
        var parts=n.toString().split('.');
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
    }

    //**************************
    // PIE CHART
    //**************************

    var top2 = latestRecord.DEU + latestRecord.SWE;
    var top5 = latestRecord.AUT + latestRecord.HUN + latestRecord.NLD + latestRecord.GRC + latestRecord.DNK;
    var others = grandTotal - top2 - top5;

    var topEU2 = latestRecord.DEU + latestRecord.SWE;
    var topEU5 = latestRecord.AUT + latestRecord.HUN + latestRecord.NLD + latestRecord.GRC + latestRecord.DNK;
    var othersEU = grandEUTotal - topEU2 - topEU5;

    var pie = new Highcharts.Chart({
        chart: {
            renderTo: 'piechart',
                //Problem only occurs on pie
                type: 'pie',
                animation: false,
                backgroundColor:'rgba(255, 255, 255, 0.0)',  
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 5,
                spacingTop: 0,
                spacingBottom: 0,
                spacingLeft: 0,
                spacingRight: 0
            },
            title: {
                text: ''
            },
            credits: {enabled: false},
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
                enabled: false
            },
            plotOptions: {
                pie: {
                  size:'100%',
                  showInLegend: false,
                  startAngle: 0,
                  allowPointSelect: false,
                  cursor: 'pointer',
                  dataLabels: {
                    distance: -25,
                    style:{ 
                        width: '40px',
                        color: '#000',
                        fontColor: '#000'
                    },
                    enabled: true,
                    softConnector: false,
                    connectorColor: 'grey',
                    format: '<span style="font-size: 10px; color: #000; font-weight: bold;">{point.percentage:.0f} %</span>' //
                }
            }
        },
        legend: {
            enabled: true
        },
        series: [{
            type: 'pie',
            data: [
            {name: 'Germany & Sweden', color: '#8c3b65', y: top2},
            {name: 'Next Top 5: Hungary, Austria, Netherlands, Greece, Denmark', color: '#d6b3c3', y: top5 },
            {name: 'All others', color: '#cacccb', y: others}
            ]
        }]
    });


    //**************************
    // LINE CHART
    //**************************


     //Example 1: Each data point has a time, with a date formatter:
     var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'linechart',
            animation: false,
            backgroundColor:'rgba(255, 255, 255, 0.0)',  
            type: 'area',
            marginBottom: 45,
              //   marginLeft: 0,
              //   marginRight: 0,
              //   marginTop: 0
          },
          xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { //custom date formats for different scales
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%e. %b',
                week: '%e. %b',
                month: '%b-%y', //month formatted as month only
                year: '%b %Y'
            }
        },
        title: { text: ''},
        yAxis: {
            title: { text: ''},
            
            opposite: true,
            gridLineWidth: 0.5,
            lineColor: '#666',
            tickColor: '#666',
            tickWidth: 0,
            labels: {
                y: 3,

                enabled: true,
                style: {
                    color: '#666',
                                    //   fontWeight: 'normal',
                                    font: '10px Arial'
                                }
                            }
                            
                        },
                        legend: {enabled: false},
                        credits: {
                            enabled: false
                        },
                        tooltip: {
                            shared: true,
                            crosshairs: true,
                            enabled: true,
                            shadow: false,
                            animation: true,
                            borderRadius: 2,
                            borderWidth: 0,
                            useHTML: true,
                            hideDelay: 0,
                            style: {
                                color: '#333333',
                                padding: '0px',
                                font: '9px Arial',
                                lineHeight: '1.5',
                                textAlign: 'center'
                            },
                            formatter: function() {
                                        // If you want to see what is available in the formatter, you can
                                        // examine the `this` variable.
                                        var string = '<div style="font-size: 10px; background-color: #5C5C5C; border: 1px #333333 solid; color: white;padding: 0px 3px 0px 2px; z-index: 555"><table cellspacing="0" cellpadding="1px" class="linetooltip" width="150px">';
                                        var tot = 0;

                                       //$(this.points).get().reverse()).each(function(i, point) {
                                           $.each(this.points, function (i, point) {
                                            if((point.series.name=='Monthly')||(point.series.name=='Cumulative')){
                                                string = string + '<tr><td style="font-weight: normal; font-size: 9px"><span style="background-color: '+point.series.color+'; border: 1px solid grey; margin-right: 3px">&nbsp;&nbsp;</span>'+ point.series.name +'</td>';
                                                string = string + '<td><span style="font-size: 7px; color:#D6D6D6;">' +Highcharts.dateFormat('%b 20%y',point.x)+'</span></td><td align="right"><b>'+ numberFormat(point.y) +'</b></td></tr>';
                                            }
                                            var d = Highcharts.dateFormat('20%y-%m-01',point.x);

                                            if(mapMonth[d]){

                                                $.each(mapMonth[d], function (index, data) {
                                                    if(data.EU == 1){
                                                        d3.selectAll('#'+index)
                                                        .attr('r', function () { if(r(data)>0) { return r(data) } else { return 0; } });
                                                    } else {
                                                        d3.selectAll('#'+index)
                                                        .attr('r', function () { if(r(data)>0) { return r(data) } else { return 0; } });

                                                    }
                                                });

                                            }
                                        });
                                           string=string+'</table></div>';
                
                                           return string;
                                    }
                                },
                                plotOptions: {
                                    series: {
                                        animation: false
                                    },
                                    area: {
                                        fillOpacity: 0.1,
                                        smoothed: true,
                                        lineWidth: 1.7,
                                        strokeOpacity: 0.1,
                                        animation: false,

                                        dataLabels: {
                                            enabled:true,
                                            color: '#000000',
                                            y:-25,
                                            formatter: function() {

                                               if(Highcharts.dateFormat('%b', new Date(this.x))=='Jun'){

                                                return   '<div style=\'color: red; font-weight: bold\'><b>20'+Highcharts.dateFormat('%y', new Date(this.x))+'</b></div>';}

                                            }
                                        },
                                        marker: {
                                            enabled: false,
                                            symbol: 'circle',
                                            radius: 3,
                                            states: {
                                                hover: {
                                                    enabled: true,
                                                    radius: 3
                                                }
                                            }
                                        },
                                        shadow: {
                                            color: '#808080',
                                            width: 9,
                                            opacity: 0.02,
                                            offsetY: 4,
                                            offsetX: 0
                                        },
                                        states: {
                                            hover: {
                                                lineWidth: 1.5
                                            }
                                        }
                                    },

                                    line: {
                                        fillOpacity: 0.1,
                                        fillColor: 'rgba(0,0,0,0.1)',
                                        lineColor: 'grey',
                                        smoothed: false,
                                        lineWidth: 1,
                                        strokeOpacity: 0.1,
                                        marker: {
                                            enabled: true,
                                            symbol: 'square',
                                            fillColor: '#8c3b65',
                                            radius: 2,
                                            states: {
                                                hover: {
                                                    enabled: true,
                                                    radius: 3
                                                }
                                            }
                                        },
                                        shadow: {
                                            color: '#808080',
                                            width: 9,
                                            opacity: 0.02,
                                            offsetY: 4,
                                            offsetX: 0
                                        },
                                        states: {
                                            hover: {
                                                lineWidth: 1.5
                                            }
                                        }
                                    },
                                    column: {
                                        pointPadding: 0,
                                        borderWidth: 1.2,
                                        borderColor: '#414141'
                                    }
                                },

                                series: [
                                {type: 'line', color: '#8c3b65', name: 'Cumulative', data: monthData.total },
                                {type: 'column', color: '#474747', name: 'Monthly', data: monthData.totalNC },
                                {type: 'line', color: '#8c3b65', name: 'Cumulative', data: monthData.totalEU },
                                {type: 'column', color: '#474747', name: 'Monthly', data: monthData.totalNC }
                                ]
                            });

    chart.series[2].hide();
    chart.series[3].hide();


    $( document ).ready(function() {

        $('#map_total').on('click', mapTotal);
        $('#map_total_eu').on('click', mapTotalEu);

        // browser sizes
        // $('.rightpanel').height($('#map').height()-10);
        var mapHeight = $('#map').height();
        var rightHeight = $('.rightpanel').height();
        var lineHeight = $('#linechart').height();
        var linePos = $('.linechart').position();
        var diff = rightHeight - mapHeight;
        var newHeight = rightHeight - linePos.top -41;

        // $('#linechart').height(lineHeight - diff - 15);
        var lineHeight = $('#linechart').height();
        // chart.setSize($('#linechart').width(), newHeight, doAnimation = false);

        var rightWidth = $('.container').width();
        if(rightWidth<=872){
         $('#buttonhelper').hide();
         $('.buttonsub').css('font-size','8px');
     } else {
         $('#buttonhelper').show();
         $('.buttonsub').show();
     }
     if(rightWidth>360){
         $('.buttonsub').css('font-size','10px');
     } 

     if(rightWidth<300){
         $('#total').css('font-size','35px');
         $('#totalYear').css('font-size','28px');
     } 

    });


    (function() {
        var oldVersion = chart.tooltip.hide;
        chart.tooltip.hide = function() {
        // do some stuff
        var result = oldVersion.apply(this, arguments);
        // do some more stuff
        if(eu==0){
            circles.transition().duration(1200).attr('r', function (d) { if(r(d.Total)>0) { return r(d.Total) } else { return 0; } });
        } else {
            circles.transition().duration(1200).attr('r', function (d) {  if(r(d.TotalEU)>0) { return r(d.TotalEU) } else { return 0; } });
        };
        return result;
    };
    })();

    }
});

function sum(ob1, ob2) {
  let sum = {};

  Object.keys(ob1).forEach(key => {
    if (ob2.hasOwnProperty(key)) {
      sum[key] = parseInt(ob1[key]) + parseInt(ob2[key])
    }  
  })
  return sum;
}

function sumObj( obj ) {
  var sum = 0;
  for( var el in obj ) {
    if(( obj.hasOwnProperty( el ))&& (el!='Month')) {
      sum += parseFloat( obj[el] );
    }
  }
  return sum;
}


