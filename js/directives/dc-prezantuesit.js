// DIRECTIVES
debugConModule.directive("dcPrezantuesit", function() {
  return {
    restrict: "E",
    templateUrl: "js/directives/dc-prezantuesit.html",
    replace: true,
    scope: {
      test: "&",
      test2: "="
    }
  };
});
