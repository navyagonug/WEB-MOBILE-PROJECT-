var app = angular.module("data", []);

app.controller("control",function ($scope,$http) {

    $scope.kcfunction = function () {

        $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=police_district,avg(days_open)&$group=police_district").then(function (value) {
            $scope.kcpolice = value.data;
            $scope.avg_days_2010 = Math.round($scope.kcpolice[0].avgopen);
            $scope.avg_days_2011 = Math.round($scope.kcpolice[1].avg_days_open);
            $scope.avg_days_2012 = Math.round($scope.kcpolice[2].avg_days_open);
            $scope.avg_days_2013 = Math.round($scope.kcpolice[3].avg_days_open);
            $scope.avg_days_2014 = Math.round($scope.kcpolice[4].avg_days_open);
            $scope.avg_days_2015 = Math.round($scope.kcpolice[5].avg_days_open);
            
            $http.get("https://data.kcmo.org/resource/cyqf-nban.json?$select=police_district,count(case_id)&$group=police_district").then(function (value) {
            $scope.cases=value.data;    
            $scope.central=parseInt($scope.cases[0].countcase_id);
            $scope.east=parseInt($scope.cases[1].count_case_id);
            $scope.metro=parseInt($scope.cases[2].count_case_id);
            $scope.north=parseInt($scope.cases[3].count_case_id);
            $scope.shoalcreek=parseInt($scope.cases[4].count_case_id);
            $scope.south=parseInt($scope.cases[5].count_case_id);
            
           drawtable($scope.central,$scope.east,$scope.metro,$scope.north,$scope.shoalcreek,$scope.south,'table');
           drawtable1($scope.central,$scope.east,$scope.metro,$scope.north,$scope.shoalcreek,$scope.south,'table1');
            
    });
    drawchart($scope.avg_days_2010, $scope.avg_days_2011, $scope.avg_days_2012, $scope.avg_days_2013, $scope.avg_days_2014, $scope.avg_days_2015, 'chart1');
    drawChartpolice($scope.avg_days_2010, $scope.avg_days_2011, $scope.avg_days_2012, $scope.avg_days_2013, $scope.avg_days_2014, $scope.avg_days_2015, 'chart');
   
            
               
        });

    };
    $scope.housing = function () {
        drawhousing('housing2');
        drawhousing1('housing1');
    }

    $scope.missedfunction = function () {

        $http.get("https://data.kcmo.org/resource/nhtf-e75a.json?$select=date_extract_y(case_opened)%20as%20year,count(case_id)%20where%20violation_code=%22NSWLTRASH%22%20&$group=year").then(function (value) {
            $scope.cases = value.data;
            $scope.y1=parseInt($scope.cases[7].count_case_id);
            $scope.y2=parseInt($scope.cases[6].count_case_id);
            $scope.y3=parseInt($scope.cases[3].count_case_id);
            $scope.y4=parseInt($scope.cases[9].count_case_id);
            $scope.y5=parseInt($scope.cases[5].count_case_id);
            $scope.y6=parseInt($scope.cases[2].count_case_id);
            
            $http.get("https://data.kcmo.org/resource/7at3-sxhp.json?$SELECT=creation_year,%20count(*)%20where%20category=%22Trash%22&$group=creation_year%20").then(function (value) {
            $scope.cases=value.data;    
            $scope.x1=parseInt($scope.cases[7].count);
            $scope.x2=parseInt($scope.cases[8].count);
            $scope.x3=parseInt($scope.cases[2].count);
            $scope.x4=parseInt($scope.cases[3].count);
            $scope.x5=parseInt($scope.cases[0].count);
            $scope.x6=parseInt($scope.cases[8].count);
            drawdum($scope.y1, $scope.y2, $scope.y3, $scope.y4, $scope.y5, $scope.y6,$scope.x1,$scope.x2,$scope.x3,$scope.x4,$scope.x5,$scope.x6, 't3');
           //drawtable1($scope.x1,$scope.x2,$scope.x3,$scope.x4,$scope.x5,$scope.x6,'t1');
            //drawChart();
    });
    // drawChartpolice1($scope.y1, $scope.y2, $scope.y3, $scope.y4, $scope.y5, $scope.y6, 't2');
   
    //drawtable($scope.central,$scope.east,$scope.metro,$scope.north,$scope.shoalcreek,$scope.south,'table');
            
               
        });

    };

    $scope.housing = function () {
         drawhousing1('housing1');
         drawhousing('housing2');
    };
    $scope.casesfunction = function () {

        $http.get("https://data.kcmo.org/resource/nhtf-e75a.json?$select=date_extract_y(case_opened)%20as%20year,count(case_id)%20&$group=year").then(function (value) {
            $scope.ycases=value.data;    
            $scope.c2010=parseInt($scope.ycases[7].countcase_id);
            $scope.c2011=parseInt($scope.ycases[6].count_case_id);
            $scope.c2012=parseInt($scope.ycases[3].count_case_id);
            $scope.c2013=parseInt($scope.ycases[9].count_case_id);
            $scope.c2014=parseInt($scope.ycases[5].count_case_id);
            $scope.c2015=parseInt($scope.ycases[2].count_case_id);
            $scope.c2016=parseInt($scope.ycases[8].count_case_id);
            $scope.c2017=parseInt($scope.ycases[4].count_case_id);
            $scope.c2018=parseInt($scope.ycases[10].count_case_id);
            $scope.c2019=parseInt($scope.ycases[1].count_case_id);
            drawyearcase($scope.c2010,$scope.c2011,$scope.c2012,$scope.c2013,$scope.c2014,$scope.c2015,$scope.c2016,$scope.c2017,$scope.c2018,$scope.c2019,'yearcase');
               
            $http.get("https://data.kcmo.org/resource/nhtf-e75a.json?$select=violation_code,count(case_id)%20&$group=violation_code%20&$order=count(case_id)%20DESC").then(function (value) {
                $scope.ycases=value.data;    
                $scope.t1=parseInt($scope.ycases[0].count_case_id);
                $scope.t2=parseInt($scope.ycases[1].count_case_id);
                $scope.t3=parseInt($scope.ycases[2].count_case_id);
                $scope.t4=parseInt($scope.ycases[3].count_case_id);
                $scope.t5=parseInt($scope.ycases[6].count_case_id);
                $scope.t6=parseInt($scope.ycases[4].count_case_id);
                $scope.t7=parseInt($scope.ycases[5].count_case_id);
                $scope.t8=parseInt($scope.ycases[7].count_case_id);
                $scope.t9=parseInt($scope.ycases[8].count_case_id);
                $scope.t10=parseInt($scope.ycases[10].count_case_id);
                drawtopcase($scope.t1,$scope.t2,$scope.t3,$scope.t4,$scope.t5,'topcase');
                drawtopcase1($scope.t6,$scope.t7,$scope.t8,$scope.t9,$scope.t10,'topcase1');
        });
    });
    };

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawyearcase);
    function drawyearcase(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,yearcase) {
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
            duration: 1000,
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
            minValue: 0 ,           
            title:'Case Count',
         
      },
        hAxis: {
          title: 'Year',
          position: 'bottom'
      }
           
              
        }; 
     
        var chart = new google.visualization.ColumnChart(document.getElementById(yearcase));
        chart.draw(data, options);
    }
    


    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawtable1);
    function drawtable1(a1,a2,a3,a4,a5,a6,table1) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Number of Cases Filed'],
            ['East', a2],
            ['North', a4],
            ['South', a6],
            ['Central', a1],
            ['Metro', a3],
            ['Shoal Creek', a5],
          
                    
        ]);
       var options = {
        animation: {
            startup: true,   /* Need to add this for animations */
            duration: 1000,
            easing: 'in',
          },
        height:600,
        width:1100,
        colors: ['#01579B'],
        
            title: 'TOTAL NUMBER OF CASES FILED AT EACH POLICE DISTRICT',
           // subtitle: 'Average time taken for each police district to solve property violation cases',
        legend: {position: 'top', maxLines: 1},
        bar: {groupWidth: "50%"},

        
        chartArea:{left:100,top:70,width:'50%',height:'50%'},
           // is3D : true
           vAxis: { 
            minValue: 0 , 
            title:'Cases Count',
         
      },
        hAxis: {
          title: 'Police District',
          position: 'bottom'
      }
     
              
        }; 
     
        var chart = new google.visualization.ColumnChart(document.getElementById(table1));
        chart.draw(data, options);
    }


    
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChartpolice);
    function drawChartpolice(a1,a2,a3,a4,a5,a6,chart) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Number of Days Taken(AVG)'],
            ['East', a2],
            ['North', a4],
            ['South', a6],
            ['Central', a1],
            ['Metro', a3],
            ['Shoal Creek', a5],
                    
        ]);
       var options = {
        animation: {
            startup: true,   /* Need to add this for animations */
            duration: 1000,
            easing: 'in',
          },
        height:600,
        width:1100,
        colors: ['#01579B'],
        
            title: 'AVERAGE TIME TAKEN TO SOLVE CASES',
            subtitle: 'Average time taken for each police district to solve property violation cases',
        legend: {position: 'top', maxLines: 1},
        bar: {groupWidth: "50%"},
        chartArea:{left:100,top:70,width:'50%',height:'50%'},
           // is3D : true
           vAxis: { 
            minValue: 0 , 
            title:'Average Days',
         
      },
        hAxis: {
          title: 'Police District',
          position: 'bottom'
      }
           
              
        }; 
     
        var chart = new google.visualization.ColumnChart(document.getElementById(chart));
        chart.draw(data, options);
    }





   google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawtable);
    function drawtable(a1,a2,a3,a4,a5,a6,table) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Number of Cases Filed'],
            ['East', a2],
            ['North', a4],
            ['South', a6],
            ['Central', a1],
            ['Metro', a3],
            ['ShoalCreek', a5],
            


            
                    
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
              },
            legend:'right',
            title:'TOTAL NUMBER OF FILED CASES',
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#7C7C82', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB']
          };  

     
        var chart = new google.visualization.PieChart(document.getElementById(table));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawchart);
    function drawchart(a1,a2,a3,a4,a5,a6,chart1) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Number of Days Taken(AVG)'],
            ['East', a2],
            ['North', a4],
            ['South', a6],
            ['Central', a1],
            ['Metro', a3],
            ['ShoalCreek', a5],
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
              },
            legend:'right',
            title:'AVERAGE TIME TAKEN TO SOLVE CASES',
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#7C7C82', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB']
          };  

     
        var chart = new google.visualization.PieChart(document.getElementById(chart1));
        chart.draw(data, options);
    }

   
   


    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChartpolice1);
    function drawChartpolice1(a1,a2,a3,a4,a5,a6,t2) {
        var data = google.visualization.arrayToDataTable([
            ['Year','AVG Days Taken To Solve Case'],
            ['Central', a1],
            ['East', a2],
            ['Metro', a3],
            ['North', a4],
            ['Shoal Creek', a5],
            ['South', a6],
                    
        ]);
       var options = {
        height:600,
        width:1100,
        colors: ['#01579B'],
        
            title: 'AVERAGE TIME TAKEN TO SOLVE CASES',
            subtitle: 'Average time taken for each police district to solve property violation cases',
        legend: {position: 'top', maxLines: 1},
        bar: {groupWidth: "50%"},
        chartArea:{left:100,top:70,width:'50%',height:'50%'},
           // is3D : true
           vAxis: { 
           
            title:'Average Days',
         
      },
        hAxis: {
          title: 'Police District',
          position: 'bottom'
      }
           
              
        }; 
     
        var chart = new google.visualization.ColumnChart(document.getElementById(t2));
        chart.draw(data, options);
    }




   google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawdum);
    function drawdum(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,t3) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Filed Trash Cases','Missed Trash Cases'],
            ['2010', parseInt(a1),parseInt(a7)],
            ['2011', parseInt(a2),parseInt(a8)],
            ['2012', parseInt(a3),parseInt(a9)],
            ['2013', parseInt(a4),parseInt(a10)],
            ['2014', parseInt(a5),parseInt(a11)],
            ['2015', parseInt(a6),parseInt(a12)]
                    
        ]);
        var options = {
            legend:'right',
            title:'COMPARISION AGANIST MISSED TRASH AND FILED TRASH CASES',
            vAxis: {title: 'Number of Filed Cases/Missed Trash'},
            hAxis: {title: 'Year'},
            //is3D:true,
            seriesType: 'bars',
          series: {3: {type: 'line'}},
          colors: ['#01579B', '#4FC3F7'] ,
          height: 300,
          width: 1000

          };  

     
        var chart = new google.visualization.ComboChart(document.getElementById(t3));
        chart.draw(data, options);
    }


    google.charts.load('current', {'packages': ['table']});
    google.charts.setOnLoadCallback(drawtopcase);
    function drawtopcase(a1,a2,a3,a4,a5,topcase) {
        var data = google.visualization.arrayToDataTable([
            ['Year','AVG Days Taken To Solve Case'],
            ['Central', a1],
            ['East', a2],
            ['Metro', a3],
            ['North', a4],
            ['Shoal Creek', a5],
                    
        ]);
       var options = {
        height:600,
        width:1100,
        colors: ['#01579B'],
        
            title: 'AVERAGE TIME TAKEN TO SOLVE CASES',
            subtitle: 'Average time taken for each police district to solve property violation cases',
        legend: {position: 'top', maxLines: 1},      
        }; 
     
        var chart = new google.visualization.Table(document.getElementById(topcase));
        chart.draw(data, options);
    }
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawtopcase);
    function drawtopcase(a1,a2,a3,a4,a5,topcase) {
        var data = google.visualization.arrayToDataTable([
            ['Type','Number of crimes'],
            ['Trash, Litter,Refuse and Rubbish', a1],
            ['Weed', a2],
            ['Unapproved Storage', a3],
            ['Limbs and Brush', a4],
            ['Unlicensed Vehicles', a5],
            
                    
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
              },
            legend:'right',
            title:'Top 5 Nuisance Violation Cases',
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#7C7C82', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB']
          };  

     
        var chart = new google.visualization.PieChart(document.getElementById(topcase));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawtopcase1);
    function drawtopcase1(a1,a2,a3,a4,a5,topcase1) {
        var data = google.visualization.arrayToDataTable([
            ['Type','Number of crimes'],
            ['Peeling,Cracked and Blistered Paint', a1],
            ['Failure to Register Vacant property', a2],
            ['Failure to register Rental Dwelling', a3],
            ['Exterior Surfaces not protected', a4],
            ['Paintings needed on exterior walls', a5],
            
                    
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
              },
            legend:'right',
            title:'Top 5 Property Maintainence Violation Cases',
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#7C7C82', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB']
          };  

     
        var chart = new google.visualization.PieChart(document.getElementById(topcase1));
        chart.draw(data, options);
    }




    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawhousing);
    function drawhousing(housing2) {
        var data = google.visualization.arrayToDataTable([
            ['Type','Median household income in KC','Median Household income'],
            ['64130',56422, 43642],
            ['64127', 56422,62402],
            ['64132', 56422,32716],
            ['64128', 56422,25614],
            ['64123',56422,34947],
            ['64131',56422,45433],
            ['64124',56422,26043],
            ['64110',56422,40828],
            ['64134',56422,41296],
            ['64109',56422,28750]
            
                    
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
              },
              curveType: 'function',
              legend: { position: 'bottom' },
            title:'Median household income in KC',
            is3D:true,
            height: 400,
            pointSize: 4,
            width: 750,
            colors: ['#7C7C82', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB']
          };  

     
        var chart = new google.visualization.LineChart(document.getElementById(housing2));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawhousing1);
    function drawhousing1(housing1) {
        var data = google.visualization.arrayToDataTable([
            ['Type','Median house value in KC','Median value of house'],
            ['64130',149600,54500],
            ['64127',149600,41100],
            ['64132',149600,59000],
            ['64128',149600,38900],
            ['64123',149600,60900],
            ['64131',149600,143200],
            ['64124',149600,56600],
            ['64110',149600,138100],
            ['64134',149600,82300],
            ['64109',149600,116400]
            
                    
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
              },
              curveType: 'function',
              legend: { position: 'bottom' },
            title:'Median House Values in KC',
            pointSize: 4,
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#7C7C82', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB']
          };  

     
        var chart = new google.visualization.LineChart(document.getElementById(housing1));
        chart.draw(data, options);
    }

   
});