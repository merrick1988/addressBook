(function () {
	'use strict';

	angular.module("mainModule").
		service("groupService", [function(){
			var self = this;
			self.group;

			self.loadGroups =  function(){
				return [
							{
								id: "group_1",
								name: "First Group"
							},
							{
								id: "group_2",
								name: "Second Group"
							}
						]
			};

			self.addGroup =  function(group, success){
				self.groups.push(group);
				success && success();
			};

			self.saveGroup =  function(group, success){
				var index = '';
				_.each(self.groups,function(item, i){
					if(item.id == group.id){
						index = i;
					}
				});
				self.groups[index]  = angular.copy(group);
				success && success();

			};

			self.deleteGroup =  function(group, success){
				var index = '';
				_.each(self.groups,function(item, i){
					if(item.id == group.id){
						index = i;
					}
				});
				self.groups.splice(index, 1);
				success && success();

			};

		}])
})();