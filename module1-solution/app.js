(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController ($scope, $filter) {
  $scope.lunchMenu = "";


  $scope.displayMessage = function() {
    if ($scope.getFoodCount()==0) {
      return "Please enter data first";
    }

    if ($scope.getFoodCount()<=3) {
      return "Enjoy!";
    }

    return "Too much!";
  };

  $scope.getFoodCount = function() {
    var arr = $scope.lunchMenu.split(",");
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length>0 &&  !(arr[i].replace(/^\s+/, '').replace(/\s+$/, '')==='') ){
        count++;
      }
    }
    return count;
  };
}
})();
