var debugConModule = angular.module("debugConModule", [
  "ngRoute",
  "ngResource"
]);

angular.module('debugConModule').controller('ControllerParent', [
             '$scope',
    function ($scope) {
        // Model value declared in parent scope
        $scope.selected = {};
    }
]);

angular.module('debugConModule').controller('ControllerChild', [
             '$scope',
    function ($scope) {
        $scope.options = [{
            id: 1,
            name: 'Alpha'
        }, {
            id: 2,
            name: 'Bravo'
        }, {
            id: 3,
            name: 'Charlie'
        }, {
            id: 4,
            name: 'Delta'
        }];
    }
]);


