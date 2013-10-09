(function(){
	'use strict';
	angular.module('mainModule', [])
		.controller("mainController", ['$scope', 'contactService', function($scope, contactService){
			$scope.contacts = [];
			$scope.newContact = null;

			var loadContacts, init, onAddContactSuccess;

			init = function(){
				loadContacts();
			};

			loadContacts = function(){
				$scope.contacts = contactService.loadContacts();
			};
			onAddContactSuccess = function(){
				$scope.newContact = null;
				alertify.success("Contact was added successfully");
			}

			$scope.showAddContact = function(){
				$scope.newContact = {};
			};

			$scope.addContact = function(){
				if(!$scope.newContact) return;
				contactService.addContact($scope.newContact, onAddContactSuccess);
			}

			init();
		}])
})();


