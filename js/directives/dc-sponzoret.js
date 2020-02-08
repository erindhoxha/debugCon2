// DIRECTIVES
debugConModule.directive("dcSponzoret", function() {
  return {
    restrict: "E",
    templateUrl: "js/directives/dc-sponzoret.html",
    replace: true,
    scope: {
      test: "&",
      test2: "="
    }
  };
});
