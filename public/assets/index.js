(function () {
	angular.module('getmean', ['ui.router',
							   'ngAnimate']);

	angular.module('getmean')
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('app', {
			abstract: true,
			templateUrl: 'assets/app/app.html'
		})
		.state('app.task-list', {
			templateUrl: 'assets/tasks/task-list.html',
			controller: 'TaskListCtrl as vm',
			url: '/task'
		});

		$urlRouterProvider.otherwise('/task');
	})
})();