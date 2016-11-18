/**
 * Created by momin on 11/8/2016.
 */
// var app = angular.module('mainApp', ['ngRoute']);
//
// app.config(function ($routeProvider) {
//     $routeProvider
//         .when('/', {
//             template: 'Welcome user!'
//         })
//         .when('/anotherpage', {
//             template: 'Welcome another user!'
//         })
//         .otherwise({
//             redirectTo: '/'
//         });

// });

var app = angular.module('mainApp', ['ngRoute']);
app.controller('myCtrl', function ($scope, $http, $location, $interval) {
    $http.get('db.json')
        .then(function (jsonData) {
            $scope.students = jsonData.data;
        });
    $scope.abc = $location.absUrl();

    $scope.myVar1 = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.myVar1 = new Date().toLocaleTimeString();
    }, 1000);
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/saudi', {
            templateUrl: 'template/saudi.html',
            controller: 'myCtrl2'
        })
        .when('/afghanistan', {
            templateUrl: 'template/afghanistan.html',
            controller: 'myCtrl2'
        })
        .when('/turkey', {
            templateUrl: 'template/turkey.html',
            controller: 'myCtrl2'
        })
        .when('/indonesia', {
            templateUrl: 'template/indonesia.html',
            controller: 'myCtrl2'
        });
});

app.controller('myCtrl2', function ($scope) {
    $scope.saudi = "Hello Saudi Arabia";
    $scope.indonesia = "Hello Indonesia";
    $scope.afghanistan = "Hello Afghanistan";
    $scope.turkey = "Hello Turkey";
});

// $scope.students = students;
