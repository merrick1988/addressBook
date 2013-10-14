(function () {
	'use strict';

	/* Edit Cobtact*/

	angular.module('mainModule')
		.controller("editContactController", ['$scope', '$stateParams', '$timeout', 'contactService', 'groupService',
			function($scope, $stateParams, $timeout, contactService, groupService){
				var onSaveContactSuccess,
					contactId =  $stateParams.id.replace(/contact-edit\_(.)/, '$1');

				$scope.contact = angular.copy(contactService.getContactById(contactId));

				$scope.contact.group = groupService.getGroupById($scope.contact.group);

				console.log($scope.contact.group)

				onSaveContactSuccess = function(){
					alertify.success("Group was saved successfully");
				};

				$scope.saveContact = function(){
					if(!$scope.contact.name && !$scope.contact.id) return;
					contactService.saveContact($scope.contact, onSaveContactSuccess);
				};
			}])
})();