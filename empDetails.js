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

app.controller('p2Ctrl', ['$scope', '$log', 'empFactory' ,function ($scope, $log, empFactory){

    empFactory.myParaData().then(function(resp){
        $scope.myData = resp.data;
    });
    

    // $scope.addNewEmp = function(y){
    //     var newObj = {
    //         id: $scope.id, gender: $scope.gender,
    //         firstname: $scope.firstname, lastname: $scope.lastname,
    //         email: $scope.email, city: $scope.city,
    //         age: $scope.age
    //     };
    //     var x = $scope.myData;
    //     x.splice(0, 0, newObj);
    //     $log.log(x);
    //     $log.log($scope.myData);
    //     return x;
    // };

    $scope.addNewEmp = function(){
        var newEmpl = {
            id: $scope.id, gender: $scope.gender,
            firstname: $scope.firstname, lastname: $scope.lastname,
            email: $scope.email, city: $scope.city,
            age: $scope.age
        };
        factory.addEmployee(newEmpl)
        .then(function(response){
            $log.log("Employee Added!");
            $scope.myData.push(newEmpl);
        }, function(error){
            $log.log("Unable to add..." + error.message);
        });
    };

    
}]);

app.factory('empFactory', function($http){
    factory = {};

    factory.myParaData = function () {
        return $http.get("Employee_Data.json");
    };

    factory.addEmployee = function(empl){
        
    };

    return factory;
});