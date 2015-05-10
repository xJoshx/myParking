(function () {

    var app = angular.module("sidebar", []);

    app.controller("SidebarController", function () {
        console.log("test");
        $(document).ready(function () {
            $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function (e) {
                $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
                e.preventDefault();
            });
        });
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
