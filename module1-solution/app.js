(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController ($scope, $filter) {
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.calculateMessage = function() {
    if ($scope.getFoodCount()==0) {
      $scope.message = "Please enter data first";
    } else if ($scope.getFoodCount()<=3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };

  $scope.getFoodCount = function() {
    var arr = $scope.lunchMenu.split(",");
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length>0 &&  !(arr[i].replace(/^\s+/, '').replace(/\s+$/, '')==='') ){ //Check for whitespace food entry
        count++;
      }
    }
    return count;
  };

  $scope.calculateMessage(); // Run to initialize default value
}
})();
