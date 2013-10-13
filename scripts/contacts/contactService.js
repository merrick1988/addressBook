(function () {
	'use strict';

	angular.module("mainModule").
		service("contactService", ["localStorageService", "$state", function(localStorageService, $state){
			var self = this,
                updateStorage;
            self.contacts = [];

            updateStorage = function(success){
                if(localStorageService.add("contacts", JSON.stringify(self.contacts))){
                    success && success();
                    $state.go("index")
                };
            };

			self.loadContacts =  function(success, failed){
                var result = JSON.parse(localStorageService.get("contacts"));
                if(result && result.length){
                    self.contacts = angular.copy(result);
                    success&& success(self.contacts);
                }else{
                    failed && failed("No contacts in storage")
                };
			};

			self.addContact =  function(contact, success){

                if(!contact) return;

                var newContact = {},
                    lastContact,
                    lastContactId;

                if(contact.group){
                    newContact.group = contact.group.id;
                } else{
                    newContact.group  = "group_0";
                };
                if(self.contacts && self.contacts.length){
                    lastContact = self.contacts[self.contacts.length - 1];
                    lastContactId = lastContact.id;
                } else{
                    lastContactId = 0;
                };

                newContact.name = contact.name;
                newContact.id = ++lastContactId;
                newContact.phone = contact.phone;
                self.contacts.push(newContact);
                updateStorage(success);
                $state.go("index")
			};

			self.saveContact =  function(contact, success){
				var index = '';
				_.each(self.contacts,function(item, i){
					if(item.id == contact.id){
						index = i;
					}
				});
                
                if(contact.group && _.isObject(contact.group)){
                    contact.group = contact.group.id;
                } else{
                    contact.group  = "group_0";
                };

				self.contacts[index]  = angular.copy(contact);
                updateStorage(success);
			};

			self.deleteContact =  function(contact, success){
				var index = '';
				_.each(self.contacts,function(item, i){
					if(item.id == contact.id){
						index = i;
					}
				});
				self.contacts.splice(index, 1);
                updateStorage(success);
			};

            self.deleteGroup = function(groupId){
                if(!groupId) return
                _.each(self.contacts, function(contact){
                    if(contact.group === groupId){
                        contact.group = "group_0"
                    }
                })
                updateStorage();
            }
		}])
})();