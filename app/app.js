(function () {

    //var app = angular.module("parking", ["components/parking-list/parkingListController"]);

    var app = angular.module('parking', ["list", "search", "sidebar"]);

    app.controller("ListController", function () {
        this.vehicles = vehicles;
        this.levels = levels;
    });

    app.controller("SidebarController", function () {
        this.levels = levels;
    });

    app.controller("SearchController", function () {

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
