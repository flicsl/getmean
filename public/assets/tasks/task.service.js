(function(){
	'use strict';

	angular.module('getmean')
	.factory('TaskService', TaskService);

	function TaskService ($q, $http, $timeout) {
		activate();

		return {
			findAll: findAll,
			create: create
		};
		
		////////////////////////////
		function activate() {

		}

		function findAll () {
			return $q(function (resolve, reject) {
				$timeout(function () {
					$http.get('http://localhost:3000/tarefas')
					.then(function (response) {
						resolve(response.data);
					}, reject);
				}, 10);
			});
		}

		function create (task) {
			return $q(function (resolve, reject) {
				$http.post('http://localhost:3000/tarefas', {
					conteudo: task.conteudo,
					createdAt: new Date(),
					finishedAt: task.finishedAt || null
				}).then(function (response) {
					resolve(response.data);
				}, reject);
			})
		}
	}
})();