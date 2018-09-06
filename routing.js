var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider){
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

// app.service('myService', function(){
//     this.calculateAge = function(x){
//         var today = new Date();
//         var x = new Date(this.birthday);
//         var age = today.getFullYear() - x.getFullYear();
//         return x.age;
//     };
// });

app.controller('p2Ctrl', function($scope, $http){
    $http.get("Employee_Data.json").then(function(response){
        $scope.myData = response.data;
        // $scope.age = myService.calculateAge($scope.birthday);
    })
    
    $scope.orderByMe = function(x){
        $scope.myOrderBy = x;
    }

    $scope.calculateAge = function(birthday){
        var today = new Date();
        var inputDate = new Date($scope.birthday);
        $scope.age = today.getFullYear() - inputDate.getFullYear();
        return $scope.age;
    }

    $scope.addNew = function(){
        // var today = new Date();
        // var inputDate = new Date($scope.birthday);
        // $scope.age = today.getFullYear() - inputDate.getFullYear();
        var inputData = {
            id: $scope.inputId, gender: $scope.inputGender,
            firstname: $scope.inputfName, lastname: $scope.inputlName,
            email: $scope.inputEmail, city: $scope.inputCity, age: $scope.calculateAge($scope.birthday)}
        $scope.myData.splice(0, 0, inputData);
        $scope.myData.splice(10, 1);
        $scope.inputGender = "";
        $scope.inputfName = "";
        $scope.inputlName = "";
        $scope.inputEmail = "";
        $scope.inputCity = "";
    }

    // $scope.deleteMe = function ($index) {
    //     $scope.myData.splice(this.$index, 1);
    // };
});