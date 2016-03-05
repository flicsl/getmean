(function() {

	angular.module('getmean').directive('dynheight', dynheight);

	function dynheight($interval) {
		return {
			restrict: 'A',
			template: "<style> [dynheight] { overflow: hidden; max-height: 0px; transition: max-height .25s; } </style> <div class='dyn-height-inner'> <ng-transclude></ng-transclude> </div>",
			transclude: true,
			link: function(scope, el, attr) {
				return $interval(function() {
					return el.css({
						'max-height': el[0].lastChild.offsetHeight + 'px'
					});
				});
			}
		};
	}

})();