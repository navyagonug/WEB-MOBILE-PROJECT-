var app = angular.module("data", []);

app.controller("control",function ($scope,$http) {

    $scope.police = function () {

        $http.get("https://data.cityofnewyork.us/resource/wvxf-dwi5.json?$select=boro,%20count(violationid)%20&$group=boro").then(function (value) {
            $scope.police = value.data;
            $scope.bronx = parseInt($scope.police[0].count_violationid);
            $scope.brooklyn = parseInt($scope.police[1].count_violationid);
            $scope.manhattan =parseInt($scope.police[2].count_violationid);
            $scope.queens = parseInt($scope.police[3].count_violationid);
            $scope.statenisland = parseInt($scope.police[4].count_violationid);
           
            
            $http.get("https://data.cityofnewyork.us/resource/wvxf-dwi5.json?$select=boro,%20count(violationid)%20where%20violationstatus=%22Close%22%20%20&$group=boro").then(function (value) {
            $scope.close=value.data;    
            $scope.bronx1 =parseInt($scope.close[0].count_violationid);
            $scope.brooklyn1 = parseInt($scope.close[1].count_violationid);
            $scope.manhattan1 = parseInt($scope.close[2].count_violationid);
            $scope.queens1 =parseInt($scope.close[3].count_violationid);
            $scope.statenisland1 = parseInt($scope.close[4].count_violationid);
            
           drawpolice($scope.bronx,$scope.brooklyn,$scope.manhattan,$scope.queens,$scope.statenisland,$scope.bronx1,$scope.brooklyn1,$scope.manhattan1,$scope.queens1,$scope.statenisland1,'policechart');
            
    });           
        });
    };
    $scope.housing = function () {
        drawhousing1('housing1');
        drawhousing2('housing2');
    }

    $scope.top5cases = function () {
            $http.get("https://data.cityofnewyork.us/resource/wvxf-dwi5.json?$select=novdescription,count(violationid)%20&$group=novdescription%20&$order=COUNT(VIOLATIONID)%20DESC").then(function (value) {
            $scope.top5cases=value.data;    
            $scope.a1 =parseInt($scope.top5cases[1].count_violationid);
            $scope.a2 = parseInt($scope.top5cases[2].count_violationid);
            $scope.a3 = parseInt($scope.top5cases[8].count_violationid);
            $scope.a4 =parseInt($scope.top5cases[24].count_violationid);
            $scope.a5 = parseInt($scope.top5cases[25].count_violationid);
            
           drawtopcases($scope.a1,$scope.a2,$scope.a3,$scope.a4,$scope.a5,'top5chart');
            
    });           
        
    };

    $scope.census = function () {
        $http.get("https://data.cityofnewyork.us/resource/wvxf-dwi5.json?$select=censustract,%20count(violationid)%20&$group=censustract%20&$order=count(violationid)%20DESC").then(function (value) {
        $scope.census=value.data;    
        $scope.b1 =parseInt($scope.census[0].count_violationid);
        $scope.b2 = parseInt($scope.census[1].count_violationid);
        $scope.b3 = parseInt($scope.census[2].count_violationid);
        $scope.b4 =parseInt($scope.census[3].count_violationid);
        $scope.b5 = parseInt($scope.census[4].count_violationid);
        
       drawcensus($scope.b1,$scope.b2,$scope.b3,$scope.b4,$scope.b5,'caseschart');
        
});           
    
};

$scope.yearwisecase = function () {
    $http.get("https://data.cityofnewyork.us/resource/wvxf-dwi5.json?$select=date_extract_y(inspectiondate)%20as%20year,count(violationid)%20&$group=year%20&$order=year%20desc").then(function (value) {
    $scope.yearcases=value.data;    
    $scope.c1 =parseInt($scope.yearcases[0].count_violationid);
    $scope.c2 =parseInt($scope.yearcases[1].count_violationid);
    $scope.c3 = parseInt($scope.yearcases[2].count_violationid);
    $scope.c4 =parseInt($scope.yearcases[3].count_violationid);
    $scope.c5 = parseInt($scope.yearcases[4].count_violationid);
    $scope.c6 = parseInt($scope.yearcases[5].count_violationid);
    $scope.c7 = parseInt($scope.yearcases[6].count_violationid);
    $scope.c8 = parseInt($scope.yearcases[7].count_violationid);
    $scope.c9 = parseInt($scope.yearcases[8].count_violationid);
    $scope.c10 = parseInt($scope.yearcases[9].count_violationid);
    
   drawyearcases($scope.c1,$scope.c2,$scope.c3,$scope.c4,$scope.c5,$scope.c6,$scope.c7,$scope.c8,$scope.c9,$scope.c10,'yearcases');
    
});           

};
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawpolice);
    function drawpolice(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,policechart) {
        var data = google.visualization.arrayToDataTable([
            ['Borough','Total Filed Cases','Cases Closed'],
            ['Bronx', parseInt(a1),parseInt(a6)],
            ['Brooklyn', parseInt(a2),parseInt(a7)],
            ['Manhattan', parseInt(a3),parseInt(a8)],
            ['Queens', parseInt(a4),parseInt(a9)],
            ['StatenIsland', parseInt(a5),parseInt(a10)],
                  
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1798,
                easing: 'in',
              },
            legend:'right',
            title:'Comparision Aganist Filed v/s Closed Cases',
            vAxis: {title: 'Total Number of Filed Cases and Closed Cases'},
            hAxis: {title: 'Borough'},
            //is3D:true,
            seriesType: 'bars',
          series: {3: {type: 'line'}},
          colors: ['#01579B', '#4FC3F7'] ,
          height: 300,
          width: 1000

          };  

     
        var chart = new google.visualization.ComboChart(document.getElementById(policechart));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawtopcases);
    function drawtopcases(a1,a2,a3,a4,a5,top5chart) {
        var data = google.visualization.arrayToDataTable([
            ['Type of Violation','Count'],
            ['Invalid Registration', a1],
            ['Absence of Carbon Monoxide detecting devices', a2],
            ['No Janitor Service', a3],
            ['No Adequate lighting', a4],
            ['No Hot Water', a5],
                    
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
              },
            legend:'right',
            pieHole: 0.4,
            title:'Top 5 Cases',
            //is3D:true,
            height: 400,
            width: 750,
            colors: ['#2F4F4F', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB','#2F4F4F']
          };  

          var chart = new google.visualization.PieChart(document.getElementById(top5chart));
          chart.draw(data, options);
      }


          google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawcensus);
    function drawcensus(a1,a2,a3,a4,a5,caseschart) {
        var data = google.visualization.arrayToDataTable([
            ['Census Tract','Total Filed Cases','Population'],
            ['254 Manhattan', parseInt(a1),34791],
            ['225 Manhattan', parseInt(a2),19642],
            ['295 Manhattan', parseInt(a3),8573],
            ['261 Manhattan', parseInt(a4),13814],
            ['253 Manhattan', parseInt(a5),13415],
                  
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1798,
                easing: 'in',
              },
            legend:'right',
            title:'Comparision Against Filed v/s Population',
            vAxis: {title: 'Total Number of Filed Cases and Population'},
            hAxis: {title: 'Census Tract'},
            //is3D:true,
            seriesType: 'bars',
          series: {3: {type: 'line'}},
          colors: ['#01579B', '#4FC3F7'] ,
          height: 300,
          width: 1000
          };  

     
        var chart = new google.visualization.ComboChart(document.getElementById(caseschart));
        chart.draw(data, options);
    }
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawyearcases);
    function drawyearcases(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,yearcases) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Number of Cases'],
            ['2010', a1],
            ['2011', a2],
            ['2012', a3],
            ['2013', a4],
            ['2014', a5],
            ['2015', a6],
            ['2016', a7],
            ['2017', a8],
            ['2018', a9],
            ['2019', a10]
                    
        ]);
       var options = {
        animation: {
            startup: true,   /* Need to add this for animations */
            duration: 1798,
            easing: 'in',
          },
        height:700,
        width:1100,
        colors: ['#01579B'],
        
            title: 'Number of Cases each year',
            //subtitle: 'Average time taken for each police district to solve property violation cases',
        legend: {position: 'right', maxLines: 1},
        bar: {groupWidth: "70%"},
        chartArea:{left:100,top:70,width:'50%',height:'50%'},
           // is3D : true
           vAxis: { 
           
            title:'Case Count',
         
      },
        hAxis: {
          title: 'Year',
          position: 'bottom'
      }
           
              
        }; 
     
        var chart = new google.visualization.ColumnChart(document.getElementById(yearcases));
        chart.draw(data, options);
    }
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawhousing1);
    function drawhousing1(housing1) {
        var data = google.visualization.arrayToDataTable([
            ['Type','Median house value in NYC','Median value of house'],
            ['11226',668500, 521200],
            ['10458', 668500,369900],
            ['10453', 668500,440400],
            ['10457', 668500,406300],
            ['11221',668500,663200],
            ['10467',668500,336200],
            ['10031',668500,379400],
            ['11207',668500,433600],
            ['11233',668500,673200],
            ['10456',668500,363100]
            
                    
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
              },
              curveType: 'function',
              legend: { position: 'bottom' },
            title:'MEDIAN HOUSE VALUE IN NYC',
            is3D:true,
            height: 400,
            pointSize: 4,
            width: 750,
            colors: ['#7C7C82', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB']
          };  

     
        var chart = new google.visualization.LineChart(document.getElementById(housing1));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawhousing2);
    function drawhousing2(housing2) {
        var data = google.visualization.arrayToDataTable([
            ['Type','Median household income in NYC','Median Household income'],
            ['11226',64894,48495],
            ['10458',64894,34401],
            ['10453',64894,24421],
            ['10457',64894,27036],
            ['11221',64894,47170],
            ['10467',64894,35381],
            ['10031',64894,44040],
            ['11207',64894,35800],
            ['11233',64894,36009],
            ['10456',64894,26724]
            
                    
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
              },
              curveType: 'function',
              legend: { position: 'bottom' },
            title:'MEDIAN HOUSEHOLD INCOME IN NYC',
            pointSize: 4,
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#7C7C82', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB']
          };  

     
        var chart = new google.visualization.LineChart(document.getElementById(housing2));
        chart.draw(data, options);
    }

  
});