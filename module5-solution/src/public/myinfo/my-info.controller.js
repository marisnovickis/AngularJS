(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);


MyInfoController.$inject = ['ApiPath','MyInfoService'];
function MyInfoController(ApiPath,MyInfoService) {
  var $myInfoCtrl = this;
  $myInfoCtrl.user = {};
  $myInfoCtrl.user.firstName = MyInfoService.getFirstName();
  $myInfoCtrl.user.lastName = MyInfoService.getLastName();
  $myInfoCtrl.user.email = MyInfoService.getEmail();
  $myInfoCtrl.user.phone = MyInfoService.getPhone();
  $myInfoCtrl.user.favoriteDish = MyInfoService.getfavoriteDish();
  $myInfoCtrl.basePath = ApiPath;
  
  $myInfoCtrl.user.registered = false;
  if (MyInfoService.getFirstName().length>0) {
	  $myInfoCtrl.user.registered = true;
  }
  
}


})();