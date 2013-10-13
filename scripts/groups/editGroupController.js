(function () {
    'use strict';

    /* New Group*/

    angular.module('mainModule')
        .controller("editGroupController", ['$scope', '$stateParams', '$timeout', 'groupService',
            function($scope, $stateParams, $timeout, groupService){
            var onSaveGroupSuccess;

            $timeout(function(){
                $scope.group = _.find(groupService.groups, function(group){
                    var contactId = $stateParams.id.replace(/group-edit\_(.)/, '$1');

                    return group.id == contactId
                });
            }, 100)



            onSaveGroupSuccess = function(){
                alertify.success("Group was saved successfully");
            };

            $scope.saveGroup = function(){
                if(!$scope.group.name && !$scope.group.id) return;
                groupService.saveGroup($scope.group, onSaveGroupSuccess);
            };
        }])
})();