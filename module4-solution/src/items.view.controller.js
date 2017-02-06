(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsViewController', ItemsViewController);


ItemsViewController.$inject = ['allItems'];
function ItemsViewController(allItems) {
  var Items = this;    
  Items.menuItems = allItems.menu_items;
  Items.category = allItems.category;
}

})();
