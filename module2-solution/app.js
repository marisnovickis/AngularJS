(function () {
'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
	
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var ToBuy = this;
		ToBuy.items = ShoppingListCheckOffService.getToBuyItems();
		
		ToBuy.buyItem = function (itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		};
	};
	
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var Bough = this;
		Bough.items = ShoppingListCheckOffService.getBoughtItems();
	};
	
	function ShoppingListCheckOffService() {
		var service = this;
		var toBuy = [{ name: "cookies", quantity: 10 },
					 { name: "soft drink", quantity: 10 },
					 { name: "candy",   quantity: 10 },
					 { name: "milk", quantity: 10 },
					 { name: "bred", quantity: 10 }];
		var bought = [];
		
		service.getToBuyItems = function () {
			return toBuy;
		};
		
		service.getBoughtItems = function () {
			return bought;
		};
		
		service.buyItem = function (itemIndex) {
			var boughtItem = toBuy.splice(itemIndex, 1);
			bought.push(boughtItem[0]);
		};		
		
	};
	
})();

