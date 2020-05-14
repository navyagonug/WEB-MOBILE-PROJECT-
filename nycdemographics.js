var app = angular.module("data", []);

app.controller("control",function ($scope,$http) {

    $scope.race = function () {

        $http.get("https://data.cityofnewyork.us/resource/qgea-i56i.json?$select=susp_race%20as%20r,count(cmplnt_num)%20where%20ofns_desc=%22ROBBERY%22%20OR%20ofns_desc=%22BURGLARY%22%20OR%20ofns_desc=%22CRIMINAL%20TRESPASS%22%20&$group=r").then(function (value) {
            $scope.race = value.data;
            $scope.black = parseInt($scope.race[1].count_cmplnt_num);
            $scope.white = parseInt($scope.race[5].count_cmplnt_num);
            $scope.ap =parseInt($scope.race[6].count_cmplnt_num);
            $scope.americanindian = parseInt($scope.race[3].count_cmplnt_num);
            $scope.unknown = parseInt($scope.race[7].count_cmplnt_num);
            
           drawrace($scope.black,$scope.white,$scope.ap,$scope.americanindian,$scope.unknown,'racechart');
            
    });           
        
    };

    $scope.gender = function () {

        $http.get("https://data.cityofnewyork.us/resource/qgea-i56i.json?$select=susp_sex%20as%20s,count(cmplnt_num)%20where%20ofns_desc=%22ROBBERY%22%20OR%20ofns_desc=%22BURGLARY%22%20OR%20ofns_desc=%22CRIMINAL%20TRESPASS%22%20&$group=s").then(function (value) {
            $scope.gender = value.data;
            $scope.male = parseInt($scope.gender[1].count_cmplnt_num);
            $scope.female = parseInt($scope.gender[2].count_cmplnt_num);
            $scope.unknown=parseInt($scope.gender[3].count_cmplnt_num);
            
           drawgender($scope.male,$scope.female,$scope.unknown,'genderchart');
            
    });           
        
    };

    $scope.age = function () {

        $http.get("https://data.cityofnewyork.us/resource/qgea-i56i.json?$select=susp_age_group%20as%20a,count(cmplnt_num)%20where%20ofns_desc=%22ROBBERY%22%20OR%20ofns_desc=%22BURGLARY%22%20OR%20ofns_desc=%22CRIMINAL%20TRESPASS%22%20&$group=a").then(function (value) {
            $scope.age = value.data;
            $scope.a1 = parseInt($scope.age[6].count_cmplnt_num);
            $scope.a2 = parseInt($scope.age[1].count_cmplnt_num);
            $scope.a3=parseInt($scope.age[5].count_cmplnt_num);
            $scope.a4=parseInt($scope.age[7].count_cmplnt_num);
            $scope.a5=parseInt($scope.age[8].count_cmplnt_num);
            
           drawage($scope.a1,$scope.a2,$scope.a3,$scope.a4,$scope.a5,'agechart');
            
    });           
        
    };

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawrace);
    function drawrace(a1,a2,a3,a4,a5,racechart) {
        var data = google.visualization.arrayToDataTable([
            ['Race','Number of Days Taken(AVG)'],
            ['Black', a1],
            ['White', a2],
            ['Asian/Pacific Islander', a3],
            ['Native Indian', a4],
            ['Unknown', a5],
           
                    
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
              },
            legend:'right',
            title:'Crimes commited based on Race',
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#2F4F4F', '#DEB887', '#FF4500', '#008080','#0000FF']
          };  

     
        var chart = new google.visualization.PieChart(document.getElementById(racechart));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawgender);
    function drawgender(g1,g2,g3,genderchart) {
        var data = google.visualization.arrayToDataTable([
            ['Gender', 'Crimes Count', { role: 'style' } ],
            ['Male', g1,"#b87333"],
            ['Female', g2,"#b87333"],
            ['Unknown', g3,"#b87333"],            
        ]);
       var options = {
        height:650,
        width:1100,
        
         title: 'Crimes Commited Based on Gender',
        legend: {position: 'right', maxLines: 1},   
        colors: ['#b87333']   
        }; 
        
        var chart = new google.visualization.BarChart(document.getElementById(genderchart));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawage);
    function drawage(a1,a2,a3,a4,a5,agechart) {
        var data = google.visualization.arrayToDataTable([
            ['Age', 'Crimes Count', { role: 'style' } ],
            ['<18', a1,"#b87333"],
            ['18-24', a2,"#b87333"],
            ['25-44', a3,"#b87333"],
            ['45-65', a4,"#b87333"],
            ['>65', a5,"#b87333"],
            
                    
        ]);
       var options = {
        height:650,
        width:1100,
        
         title: 'Crimes Commited Based on Age Group',
        legend: {position: 'right', maxLines: 1},   
        colors: ['#b87333']   
        }; 
        
        var chart = new google.visualization.ColumnChart(document.getElementById(agechart));
        chart.draw(data, options);
    }


});