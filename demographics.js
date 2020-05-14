var app = angular.module("data", []);

app.controller("control",function ($scope,$http) {

    $scope.genderf = function () {

        $http.get("https://data.kcmo.org/resource/tk79-kf9y.json?$select=sex%20as%20s,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement=%22ARR%22%20&$group=s").then(function (value) {
            $scope.gender2010 = value.data;
            $scope.m1=parseInt($scope.gender2010[2].count_report_no);
            $scope.f1=parseInt($scope.gender2010[1].count_report_no);
            $scope.u1=parseInt($scope.gender2010[3].count_report_no);

        $http.get("https://data.kcmo.org/resource/nt2f-uxvx.json?$select=sex%20as%20s,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20%20involvement=%22ARR%22%20&$group=s").then(function (value) {
                $scope.gender2011 = value.data;
                $scope.m2=parseInt($scope.gender2011[1].count_report_no);
                $scope.f2=parseInt($scope.gender2011[2].count_report_no);
                $scope.u2=parseInt($scope.gender2011[3].count_report_no);

        $http.get("https://data.kcmo.org/resource/csec-aghy.json?$select=sex%20as%20s,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20%20involvement=%22ARR%22%20&$group=s").then(function (value) {
                    $scope.gender2012 = value.data;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     $scope.m3=parseInt($scope.gender2012[1].count_report_no);
                    $scope.f3=parseInt($scope.gender2012[2].count_report_no);
                    $scope.u3=parseInt($scope.gender2012[3].count_report_no);

        $http.get("https://data.kcmo.org/resource/m3xd-e7tp.json?$select=sex%20as%20s,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement=%22ARR%22%20&$group=s").then(function (value) {
                        $scope.gender2013 = value.data;
                        $scope.m4=parseInt($scope.gender2013[1].count_report_no);
                        $scope.f4=parseInt($scope.gender2013[2].count_report_no);
                        $scope.u4=parseInt($scope.gender2013[3].count_report_no);

        $http.get("https://data.kcmo.org/resource/yu5f-iqbp.json?$select=sex_1%20as%20s,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20%20and%20involvement_1=%22ARR%22%20&$group=s").then(function (value) {
                        $scope.gender2014 = value.data;
                        $scope.m5=parseInt($scope.gender2014[2].count_report_no);
                        $scope.f5=parseInt($scope.gender2014[1].count_report_no);
                        $scope.u5=parseInt($scope.gender2014[3].count_report_no);

        $http.get("https://data.kcmo.org/resource/kbzx-7ehe.json?$select=sex_1%20as%20s,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20%20and%20involvement_1=%22ARR%22%20&$group=s").then(function (value) {
                            $scope.gender2015 = value.data;
                            $scope.m6=parseInt($scope.gender2015[1].count_report_no);
                            $scope.f6=parseInt($scope.gender2015[2].count_report_no);
                            $scope.u6=parseInt($scope.gender2015[3].count_report_no);


         $http.get("https://data.kcmo.org/resource/wbz8-pdv7.json?$select=sex%20as%20s,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement=%22ARR%22%20&$group=s").then(function (value) {
                                $scope.gender2016 = value.data;
                                $scope.m7=parseInt($scope.gender2016[1].count_report_no);
                                $scope.f7=parseInt($scope.gender2016[2].count_report_no);
                                $scope.u7=parseInt($scope.gender2016[3].count_report_no);

        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=sex%20as%20s,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement=%22ARR%22%20&$group=s").then(function (value) {
                                    $scope.gender2017 = value.data;
                                    $scope.m8=parseInt($scope.gender2017[1].count_report_no);
                                    $scope.f8=parseInt($scope.gender2017[2].count_report_no);
                                    $scope.u8=parseInt($scope.gender2017[3].count_report_no);

        $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=sex%20as%20s,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement=%22ARR%22%20&$group=s").then(function (value) {
                                    $scope.gender2018 = value.data;
                                    $scope.m9=parseInt($scope.gender2018[1].count_report_no);
                                    $scope.f9=parseInt($scope.gender2018[2].count_report_no);
                                    $scope.u9=parseInt($scope.gender2018[3].count_report_no);

        $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=sex%20as%20s,count(report_no)%20where%20description=%22Vandalism/%20Destruction%20Of%20Property%22%20or%20description=%20%22Burglary/Breaking%20and%20Entering%22%20or%20description=%20%22Trespass%20of%20Real%20Property%22%20%20and%20involvement=%22ARR%22&$group=s").then(function (value) {
                                    $scope.gender2019 = value.data;
                                    $scope.m10=parseInt($scope.gender2019[1].count_report_no);
                                    $scope.f10=parseInt($scope.gender2019[2].count_report_no);
                                    $scope.u10=parseInt($scope.gender2019[3].count_report_no);
        
            drawgender($scope.m1, $scope.m2, $scope.m3, $scope.m4, $scope.m5, $scope.m6,$scope.m7,$scope.m8,$scope.m9,$scope.m10,$scope.f1, $scope.f2, $scope.f3, $scope.f4, $scope.f5, $scope.f6,$scope.f7,$scope.f8,$scope.f9,$scope.f10,$scope.u1, $scope.u2, $scope.u3, $scope.u4, $scope.u5, $scope.u6,$scope.u7,$scope.u8,$scope.u9,$scope.u10, 'genderchart');
            drawgender1('genderchart1')
            
});
});
});
});
});
});
});
});
});
});

}; 




$scope.racef = function () {

    $http.get("https://data.kcmo.org/resource/tk79-kf9y.json?$select=race%20as%20r,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement=%22ARR%22%20&$group=r").then(function (value) {
        $scope.race2010 = value.data;
        $scope.b1=parseInt($scope.race2010[1].count_report_no);
        $scope.u1=parseInt($scope.race2010[2].count_report_no);
        $scope.w1=parseInt($scope.race2010[3].count_report_no);
        $scope.a1=parseInt($scope.race2010[4].count_report_no);
        $scope.i1=parseInt($scope.race2010[5].count_report_no);

    $http.get("https://data.kcmo.org/resource/nt2f-uxvx.json?$select=race%20as%20r,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20%20and%20involvement=%22ARR%22%20&$group=r").then(function (value) {
            $scope.race2011 = value.data;
            $scope.b2=parseInt($scope.race2011[1].count_report_no);
            $scope.u2=parseInt($scope.race2011[2].count_report_no);
            $scope.w2=parseInt($scope.race2011[3].count_report_no);
            $scope.a2=parseInt($scope.race2011[4].count_report_no);
            $scope.i2=parseInt($scope.race2011[5].count_report_no);

            $http.get("https://data.kcmo.org/resource/csec-aghy.json?$select=race%20as%20r,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement=%22ARR%22%20&$group=r").then(function (value) {
            $scope.race2012 = value.data;
            $scope.b3=parseInt($scope.race2012[1].count_report_no);
            $scope.u3=parseInt($scope.race2012[2].count_report_no);
            $scope.w3=parseInt($scope.race2012[4].count_report_no);
            $scope.a3=parseInt($scope.race2012[5].count_report_no);
            $scope.i3=parseInt($scope.race2012[6].count_report_no);
   

            $http.get("https://data.kcmo.org/resource/m3xd-e7tp.json?$select=race%20as%20r,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement=%22ARR%22%20&$group=r").then(function (value) {
                $scope.race2013 = value.data;
                $scope.b4=parseInt($scope.race2013[1].count_report_no);
                $scope.u4=parseInt($scope.race2013[2].count_report_no);
                $scope.w4=parseInt($scope.race2013[4].count_report_no);
                $scope.a4=parseInt($scope.race2013[5].count_report_no);
                $scope.i4=parseInt($scope.race2013[6].count_report_no);

            $http.get("https://data.kcmo.org/resource/yu5f-iqbp.json?$select=race_1%20as%20r,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement_1=%22ARR%22%20&$group=r").then(function (value) {
                    $scope.race2014 = value.data;
                    $scope.b5=parseInt($scope.race2014[1].count_report_no);
                    $scope.u5=parseInt($scope.race2014[2].count_report_no);
                    $scope.w5=parseInt($scope.race2014[4].count_report_no);
                    $scope.a5=parseInt($scope.race2014[5].count_report_no);
                    $scope.i5=parseInt($scope.race2014[6].count_report_no);

        $http.get("https://data.kcmo.org/resource/kbzx-7ehe.json?$select=race_1%20as%20r,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement_1=%22ARR%22%20&$group=r").then(function (value) {
            $scope.race2015 = value.data;
            $scope.b6=parseInt($scope.race2015[1].count_report_no);
            $scope.u6=parseInt($scope.race2015[2].count_report_no);
            $scope.w6=parseInt($scope.race2015[4].count_report_no);
            $scope.a6=parseInt($scope.race2015[5].count_report_no);
            $scope.i6=parseInt($scope.race2015[6].count_report_no);


            $http.get("https://data.kcmo.org/resource/wbz8-pdv7.json?$select=race%20as%20r,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement=%22ARR%22%20&$group=r").then(function (value) {
                $scope.race2016 = value.data;
                $scope.b7=parseInt($scope.race2016[1].count_report_no);
                $scope.u7=parseInt($scope.race2016[2].count_report_no);
                $scope.w7=parseInt($scope.race2016[4].count_report_no);
                $scope.a7=parseInt($scope.race2016[5].count_report_no);
                $scope.i7=parseInt($scope.race2016[6].count_report_no);
    
    

            $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=race%20as%20r,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement=%22ARR%22%20&$group=r").then(function (value) {
                    $scope.race2017 = value.data;
                    $scope.b8=parseInt($scope.race2017[1].count_report_no);
                    $scope.u8=parseInt($scope.race2017[2].count_report_no);
                    $scope.w8=parseInt($scope.race2017[4].count_report_no);
                    $scope.a8=parseInt($scope.race2017[5].count_report_no);
                    $scope.i8=parseInt($scope.race2017[6].count_report_no);

                
            $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=race%20as%20r,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20and%20involvement=%22ARR%22%20&$group=r").then(function (value) {
                        $scope.race2018 = value.data;
                        $scope.b9=parseInt($scope.race2018[1].count_report_no);
                        $scope.u9=parseInt($scope.race2018[2].count_report_no);
                        $scope.w9=parseInt($scope.race2018[4].count_report_no);
                        $scope.a9=parseInt($scope.race2018[5].count_report_no);
                        $scope.i9=parseInt($scope.race2018[6].count_report_no);
            $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=race%20as%20r,count(report_no)%20where%20description=%22Vandalism/%20Destruction%20Of%20Property%22%20or%20description=%20%22Burglary/Breaking%20and%20Entering%22%20or%20description=%20%22Trespass%20of%20Real%20Property%22%20and%20involvement=%22ARR%22%20&$group=r").then(function (value) {
                            $scope.race2019 = value.data;
                            $scope.b10=parseInt($scope.race2019[1].count_report_no);
                            $scope.u10=parseInt($scope.race2019[2].count_report_no);
                            $scope.i10=parseInt($scope.race2019[3].count_report_no);
                            $scope.w10=parseInt($scope.race2019[4].count_report_no);
                           $scope.a10=parseInt($scope.race2019[4].count_report_no);
        drawrace($scope.b1, $scope.b2, $scope.b3, $scope.b4, $scope.b5, $scope.b6,$scope.b7,$scope.b8,$scope.b9,$scope.b10,$scope.u1, $scope.u2, $scope.u3, $scope.u4, $scope.u5, $scope.u6,$scope.u7,$scope.u8,$scope.u9,$scope.u10,$scope.w1, $scope.w2, $scope.w3, $scope.w4, $scope.w5, $scope.w6,$scope.w7,$scope.w8,$scope.w9,$scope.w10,$scope.a1, $scope.a2, $scope.a3, $scope.a4, $scope.a5, $scope.a6,$scope.a7,$scope.a8,$scope.a9,$scope.a10,$scope.i1, $scope.i2, $scope.i3, $scope.i4, $scope.i5, $scope.i6,$scope.i7,$scope.i8,$scope.i9,$scope.i10,'racechart');
        drawrace1('racechart1');
});
});
});
});
});
});
});
});
});
});

}; 


$scope.firearmf = function () {

    $http.get("https://data.kcmo.org/resource/tk79-kf9y.json?$select=firearm_used_flag%20as%20f,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20or%20description=%20%22Armed%20Robbery%22%20&$group=f").then(function (value) {
        $scope.firearm2010 = value.data;
        $scope.f1=parseInt($scope.firearm2010[0].count_report_no);
        

    $http.get("https://data.kcmo.org/resource/nt2f-uxvx.json?$select=firearm_used_flag%20as%20f,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20or%20description=%20%22Armed%20Robbery%22%20&$group=f").then(function (value) {
            $scope.firearm2011 = value.data;
            $scope.f2=parseInt($scope.firearm2011[0].count_report_no);

    $http.get("https://data.kcmo.org/resource/csec-aghy.json?$select=firearm_used_flag%20as%20f,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20or%20description=%20%22Armed%20Robbery%22%20&$group=f").then(function (value) {
        $scope.firearm2012 = value.data;
        $scope.f3=parseInt($scope.firearm2011[0].count_report_no);

    $http.get("https://data.kcmo.org/resource/m3xd-e7tp.json?$select=firearm_used_flag%20as%20f,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20or%20description=%20%22Armed%20Robbery%22%20&$group=f").then(function (value) {
        $scope.firearm2013 = value.data;
        $scope.f4=parseInt($scope.firearm2013[0].count_report_no);

    $http.get("https://data.kcmo.org/resource/yu5f-iqbp.json?$select=firearm_used_flag%20as%20f,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20or%20description=%20%22Armed%20Robbery%22%20&$group=f").then(function (value) {
        $scope.firearm2014 = value.data;
        $scope.f5=parseInt($scope.firearm2014[0].count_report_no);

    $http.get("https://data.kcmo.org/resource/kbzx-7ehe.json?$select=firearm_used_flag%20as%20f,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20or%20description=%20%22Armed%20Robbery%22%20&$group=f").then(function (value) {
        $scope.firearm2015 = value.data;
        $scope.f6=parseInt($scope.firearm2015[0].count_report_no);

    $http.get("https://data.kcmo.org/resource/wbz8-pdv7.json?$select=firearm_used_flag%20as%20f,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20or%20description=%20%22Armed%20Robbery%22%20&$group=f").then(function (value) {
        $scope.firearm2016 = value.data;
        $scope.f7=parseInt($scope.firearm2016[0].count_report_no);

    $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=firearm_used_flag%20as%20f,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20or%20description=%20%22Armed%20Robbery%22%20&$group=f").then(function (value) {
        $scope.firearm2017 = value.data;
        $scope.f8=parseInt($scope.firearm2017[0].count_report_no);

    $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=firearm_used_flag%20as%20f,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Trespassing%22%20or%20description=%20%22Armed%20Robbery%22%20&$group=f").then(function (value) {
        $scope.firearm2018 = value.data;
        $scope.f9=parseInt($scope.firearm2018[0].count_report_no);

    $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=firearm_used_flag%20as%20f,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Robbery%22%20or%20description=%20%22Armed%20Robbery%22%20&$group=f").then(function (value) {
        $scope.firearm2019 = value.data;
        $scope.f10=parseInt($scope.firearm2019[1].count_report_no);
        drawfirearm($scope.f1, $scope.f2, $scope.f3, $scope.f4, $scope.f5, $scope.f6,$scope.f7,$scope.f8,$scope.f9,$scope.f10, 'firearmchart');
        drawfirearm1($scope.f1, $scope.f2, $scope.f3, $scope.f4, $scope.f5, $scope.f6,$scope.f7,$scope.f8,$scope.f9,$scope.f10, 'firearmchart1');
});
});
});
});
});
});
});
});
});
});

}; 



$scope.neighbourhoodf = function () {

    $http.get("https://data.kcmo.org/resource/nhtf-e75a.json?$select=zip_code,count(case_id)&$group=zip_code%20&$order=count(case_id)%20DESC").then(function (value) {
        $scope.zip = value.data;
        $scope.z1 = parseInt($scope.zip[0].count_case_id);
        $scope.z2 =  parseInt($scope.zip[1].count_case_id);
        $scope.z3 = parseInt($scope.zip[2].count_case_id);
        $scope.z4 =  parseInt($scope.zip[3].count_case_id);
        $scope.z5 =  parseInt($scope.zip[4].count_case_id);
        $scope.z6 =  parseInt($scope.zip[5].count_case_id);
        $scope.z7 =  parseInt($scope.zip[6].count_case_id);
        drawzipcode($scope.z1,$scope.z2,$scope.z3,$scope.z4,$scope.z5,$scope.z6,$scope.z7,'zipcodechart');
        drawzipcode1($scope.z1,$scope.z2,$scope.z3,$scope.z4,$scope.z5,'zipcodechart1');
       
       


        $http.get("https://data.kcmo.org/resource/nhtf-e75a.json?$select=neighborhood,count(case_id)&$group=neighborhood%20&$order=count(case_id)%20DESC").then(function (value) {
            $scope.neighbour = value.data;
            $scope.n1 = parseInt($scope.neighbour[0].count_case_id);
            $scope.n2 =  parseInt($scope.neighbour[1].count_case_id);
            $scope.n3 = parseInt($scope.neighbour[2].count_case_id);
            $scope.n4 =  parseInt($scope.neighbour[3].count_case_id);
            $scope.n5 =  parseInt($scope.neighbour[4].count_case_id);

            drawneighbourhood($scope.n1,$scope.n2,$scope.n3,$scope.n4,$scope.n5,'neighbourchart');
            drawneighbourhood1($scope.n1,$scope.n2,$scope.n3,$scope.n4,$scope.n5,'neighbourchart1');
           
    });
});
};

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawgender);
function drawgender(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,u1,u2,u3,u4,u5,u6,u7,u8,u9,u10,genderchart) {
    var data = google.visualization.arrayToDataTable([
        ['Year','Male','Female','Unidentified'],
        ['2010', parseInt(m1),parseInt(f1),parseInt(u1)],
        ['2011', parseInt(m2),parseInt(f2),parseInt(u2)],
        ['2012', parseInt(m3),parseInt(f3),parseInt(u3)],
        ['2013', parseInt(m4),parseInt(f4),parseInt(u4)],
        ['2014', parseInt(m5),parseInt(f5),parseInt(u5)],
        ['2015', parseInt(m6),parseInt(f6),parseInt(u6)],
        ['2016', parseInt(m7),parseInt(f7),parseInt(u7)],
        ['2017', parseInt(m8),parseInt(f8),parseInt(u8)],
        ['2018', parseInt(m9),parseInt(f9),parseInt(u9)],
        ['2019', parseInt(m10),parseInt(f10),parseInt(u10)]
                
    ]);
    var options = {
        animation: {
            startup: true,   /* Need to add this for animations */
            duration: 1000,
            easing: 'in',
          },
          curvetype:'function',
        legend:'right',
        title:'INVOLVEMENT IN CRIMES BASED ON GENDER ',
        vAxis: {title: 'Crime Count'},
        hAxis: {title: 'Year'},
        is3D:true,
        seriesType: 'bars',
      series: {3: {type: 'line'}},
      colors: ['#C7A395', '#1A008C','#95B9C7','#FE6F5E'] ,
      height: 600,
      width: 1500

      };  

 
    var chart = new google.visualization.ComboChart(document.getElementById(genderchart));
    chart.draw(data, options);
}

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawgender1);
function drawgender1(genderchart1) {
    var data = google.visualization.arrayToDataTable([
        ['Involvement','Male','Female','Unidentified'],
        ['Arrested', 77357,55992,66843],
        ['Suspected',67268,53639,64981],
        ['Victim',67776,54385,66940],
        
                
    ]);
    var options = {
        animation: {
            startup: true,   /* Need to add this for animations */
            duration: 1000,
            easing: 'in',
          },
          curvetype:'function',
        legend:'right',
        title:'INVOLVEMENT IN CRIMES BASED ON GENDER (ARRESTED,SUSPECTED AND VICTIMS) ',
        vAxis: {title: 'Crime Count',
        minValue: 0 , },
        hAxis: {title: 'Involvement'},
        is3D:true,
        seriesType: 'bars',
      series: {3: {type: 'line'}},
      colors: ['#C7A395', '#1A008C','#95B9C7','#FE6F5E'] ,
      height: 500,
      width: 1500

      };  

 
    var chart = new google.visualization.ComboChart(document.getElementById(genderchart1));
    chart.draw(data, options);
}


google.charts.load('current', {'packages': ['table']});
    google.charts.setOnLoadCallback(drawzipcode);
    function drawzipcode(a1,a2,a3,a4,a5,a6,a7,zipcodechart) {
        var data = google.visualization.arrayToDataTable([
            ['Zipcode','No. of Incidents'],
            ['64130', a1],
            ['64127', a2],
            ['64132', a3],
            ['64128', a4],
            ['64123', a5],
            ['64131', a6],
            ['64124', a7]
                    
        ]);
       var options = {
        height:300,
        width:300,
         title: 'Top 5 Zipcodes where crimes occur',
        legend: {position: 'top', maxLines: 1},      
  

        }; 
     
        var chart = new google.visualization.Table(document.getElementById(zipcodechart));
        chart.draw(data, options);
    }
   
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawrace);
function drawrace(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,u1,u2,u3,u4,u5,u6,u7,u8,u9,u10,w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,racechart) {
    var data = google.visualization.arrayToDataTable([
        ['Year','Unknown','Black','White', 'Asian','Native Indian'],
        ['2010', parseInt(u1),parseInt(b1),parseInt(w1),parseInt(a1),parseInt(i1)],
        ['2011', parseInt(u2),parseInt(b2),parseInt(w2),parseInt(a2),parseInt(i2)],
        ['2012', parseInt(u3),parseInt(b3),parseInt(w3),parseInt(a3),parseInt(i3)],
        ['2013', parseInt(u4),parseInt(b4),parseInt(w4),parseInt(a4),parseInt(i4)],
        ['2014', parseInt(u5),parseInt(b5),parseInt(w5),parseInt(a5),parseInt(i5)],
        ['2015', parseInt(u6),parseInt(b6),parseInt(w6),parseInt(a6),parseInt(i6)],
        ['2016', parseInt(u7),parseInt(b7),parseInt(w7),parseInt(a7),parseInt(i7)],
        ['2017', parseInt(u8),parseInt(b8),parseInt(w8),parseInt(a8),parseInt(i8)],
        ['2018', parseInt(u9),parseInt(b9),parseInt(w9),parseInt(a9),parseInt(i9)],
        ['2019', parseInt(u10),parseInt(b10),parseInt(w10),0,parseInt(i10)]
                
                
    ]);
    var options = {
        animation: {
            startup: true,   /* Need to add this for animations */
            duration: 1000,
            easing: 'in',
          },
        title: 'CRIME INVOLEVEMENT BASED ON RACE (ARRESTED)',
        linewidth: 70,
        curvetype:'function',
        pointSize: 9,
        legend:'right',
        height: 500,
      width: 1500,
      vAxis: {title: 'Crime Count'},
      hAxis: {title: 'Year'},
      is3D:true,
    };
    var chart = new google.visualization.LineChart(document.getElementById(racechart));
    chart.draw(data, options);
}


google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawrace1);
function drawrace1(racechart1) {
    var data = google.visualization.arrayToDataTable([
        ['Involvement','Unknown','Black','White', 'Asian','Native Indian'],
        ['Arrested',68371,67599,60151,1118,120],
        ['Suspected',68399,60106,55040,1076,104],
        ['Victim', 59673,60395,56164,1083,112],
      
                
    ]);
    var options = {
        animation: {
            startup: true,   /* Need to add this for animations */
            duration: 1000,
            easing: 'in',
          },
          curvetype:'function',
        legend:'right',
        title:'INVOLVEMENT IN CRIMES BASED ON RACE (ARRESTED,SUSPECTED AND VICTIMS) FROM 2010-2018',
        vAxis: {title: 'Crime Count',
        minValue: 0 , },
        hAxis: {title: 'Involvement'},
        is3D:true,
        seriesType: 'bars',
     // series: {3: {type: 'line'}},
      colors: ['#C7A395', '#1A008C','#95B9C7','#FE6F5E','#32CD32'] ,
      height: 500,
      width: 1500

      };  

 
    var chart = new google.visualization.ComboChart(document.getElementById(racechart1));
    chart.draw(data, options);
}


google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawfirearm);
function drawfirearm(f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,firearmchart) {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Crimes involving Firearms', { role: 'style' } ],
        ['2010', f1,"#b87333"],
        ['2011', f2,"#b87333"],
        ['2012', f3,"#b87333"],
        ['2013', f4,"#b87333"],
        ['2014', f5,"#b87333"],
        ['2015', f6,"#b87333"],
        ['2016', f7,"#b87333"],
        ['2017', f8,"#b87333"],
        ['2018', f9,"#b87333"],
        ['2019', f10,"#b87333"],
                
    ]);
   var options = {
    height:650,
    width:1100,
    
     title: 'Firearm Usage',
    legend: {position: 'right', maxLines: 1},   
    colors: ['#b87333']   
    }; 
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);
 
    var chart = new google.visualization.BarChart(document.getElementById(firearmchart));
    chart.draw(data, options);
}





});