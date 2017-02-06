(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesViewController', CategoriesViewController);


CategoriesViewController.$inject = ['MenuDataService', 'allCategories'];
function CategoriesViewController(MenuDataService, allCategories) {
  var Categories = this;
  Categories.allCategories = allCategories;
}

})();
