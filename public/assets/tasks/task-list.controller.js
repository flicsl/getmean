(function(){
	'use strict';

	angular.module('getmean')
	.controller('TaskListCtrl', TaskListCtrl);

	function TaskListCtrl (TaskService) {
		var vm = this;

		vm.tasks = [];
		vm.loading = null;

		vm.createTask = createTask;
		
		////////////////////////////
		activate();
		function activate() {
			loadTasks();
		}

		function loadTasks () {
			vm.loading = true;
			TaskService.findAll()
			.then(function (response) {
				vm.tasks = response;
			})
			.finally(function () {
				vm.loading = false;
			})
		}

		function createTask (task) {
			TaskService.create(task)
			.then(loadTasks);
		}
	}
})();