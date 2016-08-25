(function () {
	'use strict';

	angular.module('load-script', [])
		.directive("loadScript", [
			"$q",
			LoadScriptDirective
		]);

	function LoadScriptDirective($q) {

		function loadScript(src, onLoadCallback) {
			var s = document.createElement('script');
			s.src = src;
			s.onload = onLoadCallback;
			document.body.appendChild(s);
		}

		function lazyLoadScript(src) {
			var d = $q.defer();

			loadScript(src, function() {
				d.resolve();
			});

			return d.promise;
		}

		return {
			scope: {
				onLoad: "&",
				src: "@"
			},
			restrict: 'E',
			link: function (scope) {
				lazyLoadScript(scope.src)
					.then(function () {
						scope.onLoad();
					});

			}
		};
	}


})();