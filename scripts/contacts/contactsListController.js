(function () {
    'use strict';

    /* Contacts List*/

    angular.module('mainModule')
        .controller("contactsListController", ['$scope', '$log', 'contactService', 'groupService',
            function($scope, $log, contactService, groupService){

            var init,
                onFail,
                onSaveContactSuccess,
                onDeleteContactSuccess;

            onFail = function(errorMessage){
                errorMessage && $log.error(errorMessage);
            };

            init = function(){
                contactService.loadContacts();
                groupService.loadGroups();
                $scope.contacts = contactService.contacts;
                $scope.groups = groupService.groups;
            };

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

            $scope.saveContact = function(contact){
                contactService.saveContact(contact, onSaveContactSuccess);
            }

            /* Delete contact*/
            onDeleteContactSuccess = function(){
                $scope.currentContact = null;
                alertify.success("Contact was deleted successfully");
            };

            $scope.deleteContact = function(contact){
                contactService.deleteContact(contact, onDeleteContactSuccess);
            };

            $scope.getContactGroup = function(contact){
                var group =  _.find(groupService.groups, function(group){
                    return group.id == contact.group
                })
                if(group){
                   return group.name
                }
            }

            init();
        }])
})();
