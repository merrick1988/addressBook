(function () {
	'use strict';

	angular.module("mainModule").
		service("contactService", ['$timeout', function($timeout){
			var self = this;
			    self.contacts;

			self.loadContacts =  function(){
				self.contacts = [
					{
						id: "1",
						name: "First Contact",
						phone: "111-111-11"
					},
					{
						id: "2",
						name: "Second Contact",
						phone: "222-222-22"
					},
					{
						id: "3",
						name: "Third contact",
						phone: "333-333-33"
					},
					{
						id: "4",
						name: "Fourth Contact",
						phone: "444-444-44"
					}
				]

				return self.contacts;
			}
			self.addContact =  function(contact, success){
				self.contacts.push(contact);
				success && success();
			};

			self.saveContact =  function(contact, success){
				var index = '';
				_.each(self.contacts,function(item, i){
					if(item.id == contact.id){
						index = i;
					}
				});
				self.contacts[index]  = angular.copy(contact);
				success && success();

			};

			self.deleteContact =  function(contact, success){
				var index = '';
				_.each(self.contacts,function(item, i){
					if(item.id == contact.id){
						index = i;
					}
				});
				self.contacts.splice(index, 1);
				success && success();

			};

		}])
})();