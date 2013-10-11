(function () {
	'use strict';
	angular.module('mainModule')
		.controller("mainController", ['$scope', function($scope){
			$scope.showAddContact = function(){
				$scope.$broadcast("contacts.add")
			}
		}])
})();