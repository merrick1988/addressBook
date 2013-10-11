(function () {
	'use strict';

	angular.module('mainModule')
		.controller("groupController", ['$scope', 'groupService', function($scope, groupService){
			$scope.groups = [];

			var init,
				loadGroups;

			init = function(){
				loadGroups();
			};

			loadGroups = function(){
				$scope.groups = groupService.loadGroups();
			};

			init();


		}])
})();