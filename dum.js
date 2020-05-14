var app = angular.module("app", []);

app.controller("MinCtrl",function ($scope,$http) {

    $scope.kcfunction = function () {

        $http.get("https://api.census.gov/data/1999/cbp?get=EMP&for=metropolitan%20statistical%20area/micropolitan%20statistical%20area:*&key=4de3728bc6ad06dfe6fa12c4d18ac13b67a2f146").then(function (value) {
            $scope.kcvalue = value.data;
            $scope.avg_days_2010 = parseInt($scope.kcvalue[0].EMP);
            $scope.avg_days_2011 = parseInt($scope.kcvalue[1]);
            $scope.avg_days_2012 = $scope.kcvalue[2].EMP;
            $scope.avg_days_2013 = $scope.kcvalue[3].EMP;
            $scope.avg_days_2014 = $scope.kcvalue[4].EMP;
            $scope.avg_days_2015 = $scope.kcvalue[5].EMP;
            drawChartx($scope.avg_days_2010, $scope.avg_days_2011, $scope.avg_days_2012, $scope.avg_days_2013, $scope.avg_days_2014, $scope.avg_days_2015, 'kc_chart1');
               
        });
    };
    google.charts.load('current', {'packages': ['barchart']});
    google.charts.setOnLoadCallback(drawChartx);
    function drawChartx(var0, var1, var2, var3, var4, var5, var6) {
        console.log(var0);
        var data = google.visualization.arrayToDataTable([
            ['Year','Number of Days Taken(AVG)'],
            ['central', parseInt(var0)],
            ['south', parseInt(var1)],
            ['east', parseInt(var2)],
            ['north', parseInt(var3)],
            ['southfleek', parseInt(var4)],
            ['west', parseInt(var5)],
                    
        ]);
        var options = {
            title: 'Time_to_close ',
            legend: {position: 'bottom'},
            width:1100
            ,height:600,
            pointSize: 7,
            series: {0: { pointShape: 'circle' }},
            colors : ['#e7711b']
        };
        var chart = new google.visualization.LineChart(document.getElementById(var6));
        chart.draw(data, options);
    }
});