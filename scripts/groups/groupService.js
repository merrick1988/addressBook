(function () {
	'use strict';

	angular.module("mainModule").
		service("groupService", ['localStorageService', '$log', '$state', function(localStorageService, $log, $state){

            var self = this,
                createDefaultGroup;

            self.groups = [];

            createDefaultGroup = function(){
                // create default group if it is not created yet
                var defaultGroup = {};

                defaultGroup.id = "group_0";
                defaultGroup.name = "Default Group";
                defaultGroup.isCollapsed = true;

                self.groups.push(defaultGroup);
                self.updateGroups();
            };

            self.updateGroups = function(success){
                if(localStorageService.add("groups", JSON.stringify(self.groups))){
                    success && success();
                }
            };

			self.getGroupById = function(id){
				return _.find(self.groups, function(group){
					return group.id == id
				});
			};

			self.loadGroups =  function(){
                var result = JSON.parse(localStorageService.get("groups"));
                if(result && result.length){
                    self.groups = angular.copy(result);
                    var isDefaultGroupExist = _.find(self.groups, function(group){
                        return group.id == "group_0"
                    });
                    if(!isDefaultGroupExist){
                        createDefaultGroup();
                    }
                } else{
                    createDefaultGroup();
                }
            };

			self.addGroup =  function(group, success){
                if(!group) return;

                var newGroup = {},
                    lastGroup,
                    lastGroupId;

                if(self.groups && self.groups.length){
                    lastGroup = self.groups[self.groups.length - 1];
                    lastGroupId = lastGroup.id.replace(/group\_(.)/, '$1');
                } else{
                    lastGroupId = 0;
                }
                newGroup.name = group.name;
                newGroup.id = "group_" + ++lastGroupId;
                newGroup.isCollapsed = true;
				self.groups.push(newGroup);
                self.updateGroups(success);
                $state.go("index")
			};

			self.saveGroup =  function(group, success){
				var index = '';
				_.each(self.groups,function(item, i){
					if(item.id == group.id){
						index = i;
					}
				});
				self.groups[index]  = angular.copy(group);
                self.updateGroups(success);
                $state.go("index")
			};

			self.deleteGroup =  function(group, success){
				var index = '';
				_.each(self.groups,function(item, i){
					if(item.id == group.id){
						index = i;
					}
				});
				self.groups.splice(index, 1);
                self.updateGroups(success);
                $state.go("index")
			};

		}])
})();