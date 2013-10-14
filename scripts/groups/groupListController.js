(function () {
	'use strict';

	angular.module('mainModule')
		.controller("groupListController", ['$scope', 'groupService', 'contactService', '$log',
            function($scope, groupService, contactService, $log){

                var init,
                    onFail;

                onFail = function(errorMessage){
                    errorMessage && $log.error(errorMessage);
                };

                init = function(){
                    groupService.loadGroups();
                    $scope.groups = groupService.groups;
                };

				$scope.showEmptyImage = true;

                $scope.getCountContactInGroup = function(group){

                    var contactsArray =  _.filter(contactService.contacts, function(contact){
                        return contact.group == group.id
                    });


                    if(contactsArray){
                        return contactsArray.length;
                    }
                };

                $scope.updateGroups = function(){
                    groupService.updateGroups();
                };

                $scope.toggleGroup = function(group){
                    group.isCollapsed = !group.isCollapsed;
                    $scope.updateGroups();
                }

                $scope.deleteGroup = function(group){
                    if(!group) return;
                    contactService.deleteGroup(group.id);
                    groupService.deleteGroup(group, function(){
                        alertify.success("Group was deleted successfully");
                    })
                }

                init();
            }])
})();