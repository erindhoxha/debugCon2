// DIRECTIVES
debugConModule.directive("dcKontakti", function() {
  return {
    restrict: "E",
    templateUrl: "js/directives/dc-kontakti.html",
    replace: true,
    scope: {
      test: "&",
      test2: "="
    }
  };
});
