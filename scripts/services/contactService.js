(function () {
	'use strict';

	angular.module("mainModule").
		service("contactService",[ function(){
			var self = this;
			    self.contacts;

			self.loadContacts =  function(){
				self.contacts = [
					{
						name: "First Contact",
						phone: "111-111-11"
					},
					{
						name: "Second Contact",
						phone: "222-222-22"
					},
					{
						name: "Third Contact",
						phone: "333-333-33"
					},
					{
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

		}])
})();