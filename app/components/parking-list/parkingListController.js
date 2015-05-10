(function () {

    var app = angular.module("list", []);

    app.controller("ListController", function () {
        this.vehicles = vehicles;
        this.levels = levels;
    });

    app.directive("ListDirective", function () {
        return {
            restrict: "E",
            templateUrl: "parking-list.html",
            controller: "ListController",
            controllerAs: "List"
        };
    });

})();
