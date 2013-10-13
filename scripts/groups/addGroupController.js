(function () {
    'use strict';

    /* New Group*/

    angular.module('mainModule')
        .controller("addGroupController", ['$scope', 'groupService', function($scope, groupService){
            $scope.newGroup = {};

            var onAddGroupSuccess;

            onAddGroupSuccess = function(){
                $scope.newGroup = null;
                alertify.success("Group was added successfully");
            };

            $scope.addGroup = function(){
                if(!$scope.newGroup.name) return;
                groupService.addGroup($scope.newGroup, onAddGroupSuccess);
            };
        }])
})();