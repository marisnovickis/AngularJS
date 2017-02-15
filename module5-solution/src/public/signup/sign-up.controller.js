(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);


SignUpController.$inject = ['ApiPath','MenuService','MyInfoService'];
function SignUpController(ApiPath,MenuService,MyInfoService) {
  var $signUpCtrl = this;
  $signUpCtrl.user = {};
  $signUpCtrl.user.firstName = MyInfoService.getFirstName();
  $signUpCtrl.user.lastName = MyInfoService.getLastName();
  $signUpCtrl.user.email = MyInfoService.getEmail();
  $signUpCtrl.user.phone = MyInfoService.getPhone();
  $signUpCtrl.user.favoriteDish = MyInfoService.getfavoriteDish().short_name;
  $signUpCtrl.favoriteDishInvalid = false;
  
  $signUpCtrl.formDataSaved = false;
  if (MyInfoService.getFirstName().length>0) {
	  $signUpCtrl.formDataSaved = true;
  }

  $signUpCtrl.submit = function() {
      var menuItem = MenuService.getMenuItem($signUpCtrl.user.favoriteDish);

      menuItem.then(function(result) {
          $signUpCtrl.favoriteDishInvalid = false;
		  $signUpCtrl.formDataSaved = true;
		  MyInfoService.setFirstName($signUpCtrl.user.firstName);
		  MyInfoService.setLastName($signUpCtrl.user.lastName);
		  MyInfoService.setEmail($signUpCtrl.user.email);
		  MyInfoService.setPhone($signUpCtrl.user.phone);
		  MyInfoService.setfavoriteDish(result);
      })
      .catch(function(fallback) {
          $signUpCtrl.favoriteDishInvalid = true;
      });
  }
}


})();
