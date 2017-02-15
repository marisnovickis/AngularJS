(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);



function MyInfoService() {
  var service = this;
  service.firstName = '';
  service.lastName = '';
  service.email = '';
  service.phone = '';
  service.favoriteDish = {};

  service.setFirstName = function (firstName) {
	service.firstName = firstName;
  };
  
  service.setLastName = function (lastName) {
	service.lastName = lastName;
  };

  service.setEmail = function (email) {
	service.email = email;
  };

  service.setPhone = function (phone) {
	service.phone = phone;
  };
  
  service.setfavoriteDish= function (favoriteDish) {
	service.favoriteDish = favoriteDish;
  };

  service.getFirstName = function () {
	return service.firstName;
  };
  
  service.getLastName = function () {
	return service.lastName;
  };

  service.getEmail = function () {
	return service.email;
  };

  service.getPhone = function () {
	return service.phone;
  };
  
  service.getfavoriteDish= function () {
	return service.favoriteDish;
  };

  

}



})();
