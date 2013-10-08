(function(){
	'use strict';
	angular.module('mainModule', [])
		.controller("mainController", ['$scope', 'contactService', function($scope, contactService){
			$scope.contacts = [];

			var loadContacts, init;

			init = function(){
				loadContacts();
			};

			loadContacts = function(){
				$scope.contacts = contactService.loadContacts();
			};

			init();
		}])
})();


