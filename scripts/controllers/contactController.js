(function () {
	'use strict';
	angular.module('mainModule')
		.controller("contactController", ['$scope', 'contactService', function($scope, contactService){
			$scope.contacts = [];
			$scope.newContact = null;
			$scope.currentContact = null;

			var loadContacts,
				init,
				onAddContactSuccess,
				onSaveContactSuccess,
				onDeleteContactSuccess;

			init = function(){
				loadContacts();
			};



			loadContacts = function(){
				$scope.contacts = contactService.loadContacts();
			};


			/* New Contact*/
			onAddContactSuccess = function(){
				$scope.newContact = null;
				alertify.success("Contact was added successfully");
			};

			$scope.showAddContact = function(){
				$scope.newContact = {};
				$scope.currentContact = null;
				$scope.editModeContact = null;
			};

			$scope.addContact = function(){
				if(!$scope.newContact || !$scope.newContact.name || !$scope.newContact.phone) return;
				contactService.addContact($scope.newContact, onAddContactSuccess);
			}

			/* Current Contact*/

			$scope.showContactDetails = function(contact){
				$scope.newContact = null;
				$scope.editModeContact = null;
				$scope.currentContact = contact;
			}

			/* Edit contact*/
			onSaveContactSuccess = function(){
				$scope.editModeContact = null;
				alertify.success("Contact was saved successfully");
			};

			$scope.editContact = function(){
				$scope.editModeContact = angular.copy($scope.currentContact);
				$scope.currentContact = null;
				$scope.newContact = null;
			}

			$scope.saveContact = function(){
				contactService.saveContact($scope.editModeContact, onSaveContactSuccess);
			}

			/* Delete contact*/
			onDeleteContactSuccess = function(){
				$scope.currentContact = null;
				alertify.success("Contact was deleted successfully");
			};

			$scope.deleteContact = function(){
				contactService.deleteContact($scope.currentContact, onDeleteContactSuccess);
			}

			init();
		}])
})();