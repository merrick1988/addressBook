(function(){
	'use strict';
	angular.module('mainModule', ['ui.router', 'LocalStorageModule']);
	angular.module('mainModule')
		.config(['$stateProvider', '$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider){

				$urlRouterProvider.otherwise('/');

				$stateProvider
                    .state('index', {
                        url: '',
                        templateUrl: 'views/main.html',
                        controller: 'contactsListController'
                    })
                    .state('index.contact-item', {
                        url: '/contact-item_:id',
                        templateUrl: 'views/contacts/contact-item.html',
                        controller: function($scope, $stateParams, contactService){
                            $scope.contact = _.find(contactService.contacts, function(contact){
                                var contactId = $stateParams.id.replace(/contact-item\_(.)/, '$1')
                                return contact.id == contactId
                            })
                        }
                    })
                    .state('index.edit', {
                        url: '/contact-edit_:id',
                        templateUrl: 'views/contacts/contact-edit.html',
                        controller: 'editContactController'
                    })
					.state('index.add-contact', {
                        url: '/add-contact',
                        templateUrl: 'views/contacts/contact-add.html',
                        controller: 'addContactController'
                    })
                    .state('index.add-group', {
                        url: '/add-group',
                        templateUrl: 'views/groups/group-add.html',
                        controller: 'addGroupController'
                    })
                    .state('index.group-edit', {
                        url: '/group-edit_:id',
                        templateUrl: 'views/groups/group-edit.html',
                        controller: 'editGroupController'
                    })
			}
		])
})();


