(function () {

    var app = angular.module("list", []);

    app.controller("ListController", function () {
        this.vehicles = vehicles;
        this.levels = levels;
    });

    app.directive("listDirective", function () {
        return {
            restrict: "E",
            templateUrl: "/myParking/app/components/parking-list/parking-list.html",
            controller: "ListController",
            controllerAs: "List"
        };
    });

})();
