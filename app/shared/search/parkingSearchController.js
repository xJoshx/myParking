(function () {

    var app = angular.module("search", []);

    app.controller("SearchController", function () {

    });

    app.directive("parkingSearch", function () {
        return {
            restrict: "E",
            templateUrl: "/myParking/app/shared/search/parking-search.html",
            controller: "SearchController",
            controllerAs: "Search"
        };
    });

})();
