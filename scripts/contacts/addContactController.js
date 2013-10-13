(function () {
    'use strict';

    /* New Contact*/

    angular.module('mainModule')
        .controller("addContactController", ['$scope', '$timeout', 'contactService', 'groupService',
            function($scope, $timeout, contactService, groupService){
            $scope.newContact = {};
            $timeout(function(){
                $scope.groupArray = groupService.groups;
            }, 100)

            var onAddContactSuccess;

            onAddContactSuccess = function(){
                $scope.newContact = null;
                alertify.success("Contact was added successfully");
            };

            $scope.addContact = function(){
                if(!$scope.newContact || !$scope.newContact.name || !$scope.newContact.phone) return;
                console.log($scope.newContact)
                contactService.addContact($scope.newContact, onAddContactSuccess);
            };
        }])
})();