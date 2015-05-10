(function () {

    //var app = angular.module("parking", ["components/parking-list/parkingListController"]);

    var app = angular.module('parking', []);

    app.controller("ListController", function () {
        this.vehicles = vehicles;
        this.levels = levels;
    });

    app.directive("ListDirective", function () {
        return {
            restrict: "E",
            //templateUrl: "parking-list.html",
            templateUrl: "<span>Prueba</span>",
            controller: "ListController",
            controllerAs: "List"
        };
    });

    var vehicles = [
        {
            type: "car",
            id: "6924CXI",
            slot: 1,
            level: 1
        },
        {
            type: "motorbike",
            id: "3583IOD",
            slot: 2,
            level: 1
        }
    ];
    var levels = [
        {
            level: 1,
            places: 500,
            placesFree: 500
        }
    ];
})();
