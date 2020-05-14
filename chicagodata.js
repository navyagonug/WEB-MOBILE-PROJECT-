var app = angular.module("data", []);

app.controller("control",function ($scope,$http) {

    $scope.yearwisecase = function () {
        $http.get("https://data.cityofchicago.org/resource/22u3-xenr.json?$select=date_extract_y(violation_date)%20as%20year,count(id)%20&$group=year").then(function (value) {
        $scope.yearcases=value.data;    
        $scope.c1 =parseInt($scope.yearcases[0].count_id);
        $scope.c2 =parseInt($scope.yearcases[1].count_id);
        $scope.c3 = parseInt($scope.yearcases[2].count_id);
        $scope.c4 =parseInt($scope.yearcases[3].count_id);
        $scope.c5 = parseInt($scope.yearcases[4].count_id);
        $scope.c6 = parseInt($scope.yearcases[5].count_id);
        $scope.c7 = parseInt($scope.yearcases[6].count_id);
        $scope.c8 = parseInt($scope.yearcases[7].count_id);
        $scope.c9 = parseInt($scope.yearcases[8].count_id);
        $scope.c10 = parseInt($scope.yearcases[9].count_id);
        $scope.c11 = parseInt($scope.yearcases[10].count_id);
        $scope.c12 = parseInt($scope.yearcases[11].count_id);
        $scope.c13 = parseInt($scope.yearcases[12].count_id);
        $scope.c14 = parseInt($scope.yearcases[13].count_id);
        
       drawyearcases($scope.c1,$scope.c2,$scope.c3,$scope.c4,$scope.c5,$scope.c6,$scope.c7,$scope.c8,$scope.c9,$scope.c10,$scope.c11,$scope.c12,$scope.c13,$scope.c14,'yearcases');
        
    });           
    
    };
    $scope.inspection = function () {
        $http.get("https://data.cityofchicago.org/resource/22u3-xenr.json?$select=inspection_category,count(id)%20&$group=inspection_category").then(function (value) {
        $scope.inspection=value.data;    
        $scope.c1 =parseInt($scope.inspection[0].count_id);
        $scope.c2 =parseInt($scope.inspection[1].count_id);
        $scope.c3 = parseInt($scope.inspection[2].count_id);
        $scope.c4 =parseInt($scope.inspection[3].count_id);
        drawinspection($scope.c1,$scope.c2,$scope.c3,$scope.c4,'inspection');
        
    });
}
    $scope.dept = function () {
       $http.get("https://data.cityofchicago.org/resource/22u3-xenr.json?$select=department_bureau,count(id)%20&$group=department_bureau%20&$order=count(id)%20DESC").then(function (value) {
        $scope.d=value.data;    
        $scope.b1 =parseInt($scope.d[0].count_id);
        $scope.b2 =parseInt($scope.d[1].count_id);
        $scope.b3 = parseInt($scope.d[2].count_id);
        $scope.b4 =parseInt($scope.d[3].count_id);
        $scope.b5 =parseInt($scope.d[4].count_id);
        $scope.b6 =parseInt($scope.d[5].count_id);
        $scope.b7 =parseInt($scope.d[6].count_id);
        $scope.b8 =parseInt($scope.d[7].count_id);
        $scope.b9 =parseInt($scope.d[8].count_id);
        $scope.b10 =parseInt($scope.d[9].count_id);
        $scope.b11 =parseInt($scope.d[10].count_id);
        $scope.b12 =parseInt($scope.d[11].count_id);
        $scope.b13 =parseInt($scope.d[12].count_id);
        $scope.b14 =parseInt($scope.d[13].count_id);
       drawdept($scope.b1,$scope.b2,$scope.b3,$scope.b4,$scope.b5,$scope.b6,$scope.b7,$scope.b8,$scope.b9,$scope.b10,$scope.b11,$scope.b12,$scope.b13,$scope.b14,'i1');
      
     
    
});           
    
    }
   
   
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawyearcases);
    function drawyearcases(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,yearcases) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Number of Cases'],
            ['2006', a1],
            ['2007', a2],
            ['2008', a3],
            ['2009', a4],
            ['2010', a5],
            ['2011', a6],
            ['2012', a7],
            ['2013', a8],
            ['2014', a9],
            ['2015', a10],
            ['2016', a11],
            ['2017', a12],
            ['2018', a13],
            ['2019', a14]
                    
        ]);
       var options = {
        animation: {
            startup: true,   /* Need to add this for animations */
            duration: 1798,
            easing: 'in',
          },
        height:700,
        width:1700,
        colors: ['#01579B'],
        
            title: 'Number of Cases each year',
            //subtitle: 'Average time taken for each police district to solve property violation cases',
        legend: {position: 'right', maxLines: 1},
        bar: {groupWidth: "70%"},
        chartArea:{left:90,top:70,width:'50%',height:'50%'},
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
    google.charts.setOnLoadCallback(inspection);
    function drawinspection(a1,a2,a3,a4,inspection) {
        var data = google.visualization.arrayToDataTable([
            ['Inspection Category','Count'],
            ['COMPLAINT(311 call)', a1],
            ['PERIODIC (Annual Inpection)', a2],
            ['PERMIT', a3],
            ['REGISTRATION (Due to registrations)', a4],
            
                    
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
              },
            legend:'right',
            pieHole: 0.4,
            title:'Types of Inspection categories',
            //is3D:true,
            height: 1000,
            width: 1000,
            colors: ['#2F4F4F', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB','#2F4F4F']
          };  

          var chart = new google.visualization.PieChart(document.getElementById(inspection));
          chart.draw(data, options);
      }

      google.charts.load('current', {'packages': ['corechart']});
      google.charts.setOnLoadCallback(i1);
      function drawdept(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,i1) {
          var data = google.visualization.arrayToDataTable([
              ['Department Beaureu','Count'],
              ['CONSERVATION', a1],
              ['DEMOLITION', a2],
              ['SPECIAL TASK FORCE', a3],
              ['ELEVATOR', a4],
              ['ELECTRICAL', a5],
              ['VENTILATION', a6],
              ['BOILER', a7],
              ['NEW CONSTRUCTION', a8],
              ['REFRIGIRATION', a9],
              ['PLUMBING', a10],
              ['SPECIAL INSPECTION', a11],
              ['SIGNS', a12],
              ['IRON', a13],
              ['WATER', a14],
              
                      
          ]);
          var options = {
              animation: {
                  startup: true,   /* Need to add this for animations */
                  duration: 1000,
                  easing: 'in',
                },
              legend:'right',
              pieHole: 0.4,
              title:'Dpeartment Involvement',
              //is3D:true,
              height: 1000,
              width: 1000,
             // colors: ['#2F4F4F', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB','#2F4F4F']
            };  
  
            var chart = new google.visualization.PieChart(document.getElementById(i1));
            chart.draw(data, options);
        }
    
  
});