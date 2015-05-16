(function () {

    var app = angular.module("sidebar", []);

    app.controller("SidebarController", function () {

    });

    app.directive("parkingSidebar", function () {
        return {
            restrict: "E",
            templateUrl: "/myParking/app/shared/sidebar/parking-sidebar.html",
            controller: "SidebarController",
            controllerAs: "Sidebar"
        };
    });

})();
