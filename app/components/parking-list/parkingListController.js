(function () {

    var app = angular.module("list", []);

    app.directive("listDirective", function () {
        return {
            restrict: "E",
            templateUrl: "/myParking/app/components/parking-list/parking-list.html",
            controller: "ListController",
            controllerAs: "List"
        };
    });

})();
