(function () {
	'use strict';

	angular.module("mainModule").
		service("contactService",[ function(){
			var self = this;

			self.loadContacts =  function(){
				var contacts = {
					0: {
						name: "First Contact",
						phone: "111-111-11"
					},
					1: {
						name: "Second Contact",
						phone: "222-222-22"
					},
					2: {
						name: "Third Contact",
						phone: "333-333-33"
					},
					3: {
						name: "Fourth Contact",
						phone: "444-444-44"
					}
				}

				return contacts;
			}
		}])
})();