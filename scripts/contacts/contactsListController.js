(function () {
    'use strict';

    /* Contacts List*/

    angular.module('mainModule')
        .controller("contactsListController", ['$scope', '$log', 'contactService', 'groupService',
            function($scope, $log, contactService, groupService){

            var init,
                onDeleteContactSuccess;

            init = function(){
                contactService.loadContacts();
                $scope.contacts = contactService.contacts;
            };

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
