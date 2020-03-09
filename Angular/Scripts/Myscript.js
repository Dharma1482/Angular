/// <reference path="angular.min.js" />
var myApp = angular.module("mymod", []);

var contrl = function ($scope) {
    $scope.measage = "Dharma";
};

myApp.controller("contrl", contrl);