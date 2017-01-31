(function () {
'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);
	
	function FoundItemsDirective() {
		var ddo = {
			templateUrl: 'foundItems.html',
			scope: {
				items: '<',
				onRemove: '&'
			},
			controller: FoundItemsDirectiveController,
			controllerAs: 'directiveCtrl',
			bindToController: true
		};

		return ddo;
	};

	function FoundItemsDirectiveController(){
		var directiveCtrl = this;
		return true;
	};
	
	
	
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var narrowDown = this;
		
		narrowDown.found = [];
		narrowDown.displayNothingFound = false;
		
		narrowDown.getMenuItems = function () {
			var results = MenuSearchService.getMatchedMenuItems(narrowDown.searchTerm);			
		    results.then(function (response) {
				narrowDown.found=response;
				narrowDown.displayNothingFound=true;
			});
		};
		
		narrowDown.removeMenuItem = function(index) {
			narrowDown.found.splice(index,1);
		};

	};
	
	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http) {
		var service = this;
		
		service.getMatchedMenuItems = function (searchTerm) {
			return $http({url:'https://davids-restaurant.herokuapp.com/menu_items.json'})
					.then(function (result) {
						if (searchTerm===undefined || searchTerm.trim()=='') return [];
						// process result and only keep items that match
						var foundItems = [];
						angular.forEach(result.data.menu_items, function(menuItem){
							if (menuItem.description.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1) {
								foundItems.push(menuItem);
							}
						});

						// return processed items
						return foundItems;
					});
		};
		
	};
})();