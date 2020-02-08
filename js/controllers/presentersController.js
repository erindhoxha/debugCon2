debugConModule.controller("presentersController", [
  "$scope",
  "$http",
  "$resource",
  "$timeout",
  "$routeParams",
  "$rootScope",
  function($scope, $http, $resource, $timeout, $routeParams, $rootScope) {
    $scope.presenters = [
      {
        name: "Denat Hoxha",
        image: "img/person.png",
        occupation: "Software Engineer",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore illum nesciunt incidunt et, enim totam itaque velit! Molestias, neque obcaecati!"
      },
      {
        name: "Muharrem HoxhimustafaHoxhaj",
        image: "img/person.png",
        occupation: "Software Engineer",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore illum nesciunt incidunt et, enim totam itaque velit! Molestias, neque obcaecati!"
      }
    ];
  }
]);
