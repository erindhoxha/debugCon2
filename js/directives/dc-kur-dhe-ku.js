// DIRECTIVES
debugConModule.directive("dcKurDheKu", function() {
  return {
    restrict: "E",
    templateUrl: "js/directives/dc-kur-dhe-ku.html",
    replace: true,
    scope: {
      test: "&",
      test2: "="
    }
  };
});
