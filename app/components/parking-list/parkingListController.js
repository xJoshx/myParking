(function () {

    var app = angular.module("list", []);

    app.controller("ListController",["$scope", function ($scope) {
        $scope.vehicles = parking_status.vehicles;
        $scope.levels = parking_status.levels;

        $scope.sortType = "slot";
        $scope.sortReverse = false;
    }]);
        //this.vehicles = JSON.parse(StorageManager.loadElement());

    app.directive("parkingList", function () {
        return {
            restrict: "E",
            templateUrl: "/myParking/app/components/parking-list/parking-list.html",
            controller: "ListController",
            controllerAs: "List"
        };
    });

    var  parking_status = {
  "vehicles" : [
    {
      "type" : "car",
      "id" : "EBE1262",
      "slot" : 291,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "SSC0521",
      "slot" : 419,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "KOF5469",
      "slot" : 492,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "TFX9278",
      "slot" : 495,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "WBC9904",
      "slot" : 498,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "JMM7802",
      "slot" : 80,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "CNU7515",
      "slot" : 188,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "WTC1829",
      "slot" : 444,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "YXZ9324",
      "slot" : 20,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "RLP4537",
      "slot" : 362,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "RBY3352",
      "slot" : 369,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "BZS2972",
      "slot" : 322,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "TLJ8269",
      "slot" : 316,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "PVN1027",
      "slot" : 296,
      "level" : 1
      },
    {
      "type" : "car",
      "id" : "RPQ5623",
      "slot" : 153,
      "level" : 1
      }
    ],
  "levels" : {
    "name" : 0,
    "slots" : 500,
    "slots_free" : 214
    }
  };
})();
