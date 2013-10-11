(function(){
	'use strict';
	angular.module('mainModule', ['ui.router']);
	angular.module('mainModule')
		.config(['$stateProvider', '$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider){

				$urlRouterProvider.otherwise('/');

				$stateProvider
					.state('contacts', {
						views: {
							right: {
								templateUrl: '../views/contacts/contact-add.html'
							}
						}
					})
			}
		])
})();


