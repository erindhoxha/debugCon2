// DIRECTIVES
debugConModule.directive("dcPrezantuesit", function() {
  return {
    restrict: "E",
    templateUrl: "js/directives/dc-prezantuesit.html",
    replace: true,
    controller: "presentersController",
    scope: {
      test: "&",
      test2: "="
    }
  };
});
