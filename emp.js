var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/page1", {
            templateUrl: "page1.html",
            controller: "p1Ctrl"
        })
        .when("/page2", {
            templateUrl: "page2.html",
            controller: "p2Ctrl"
        })
        .when("/page3", {
            templateUrl: "page3.html",
            controller: "p2Ctrl"
        });
});

app.controller('p2Ctrl', ['$location', '$scope', '$http', '$log', 'empFactory', function($location, $scope, $http, $log, empFactory){

    $scope.orderByMe = function(x){
        $scope.myOrderBy = x;
    };

    empFactory.myParaData().then(function (response) {
        $scope.myData = response.data;
    });

    // $scope.addNew = function (){
    //     console.log($scope.y);

    //     $scope.myData.push($scope.y);
    //     console.log($scope.myData);
    // };

    // $scope.obj = {
    //     id: $scope.y.id, gender: $scope.y.gender,
    //     firstname: $scope.y.firstname, lastname: $scope.y.lastname,
    //     email: $scope.y.email, city: $scope.y.city,
    //     age: $scope.y.age
    // };
    // empFactory.addNew($scope.obj);

    $scope.newObj = {
        id: 15, gender: "M",
        firstname: "abc", lastname: "cdf",
        email: "abc@dn.com", city: "fff",
        age: 65};

    $scope.addNewEmp() = function(y){
        $scope.myData = empFactory.addMe($scope.newObj);
    };

}]);

// app.controller('p3Ctrl', ['$scope', '$log', 'empForm', function($scope, $log, empForm){


// }]);

app.factory('empFactory', function($http){
    //$log.log("empFactory instantiated...");
    oEmpFactory = {};

    oEmpFactory.myParaData =  function(){
        return $http.get("Employee_Data.json");
    };

    oEmpFactory.calcAge = function(dob){
        var today = new Date();
        var inputDate = new Date(dob);
        age = today.getFullYear() - inputDate.getFullYear();
        return age;
    };

    oEmpFactory.addMe = function(y){
        var obj = y;
        console.log(obj);
        myParaData.push(obj);
        return myParaData;
    };
    
    return oEmpFactory;
});