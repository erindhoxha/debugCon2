// DIRECTIVES
debugConModule.directive("dcNavbar", function() {
  return {
    restrict: "E",
    templateUrl: "js/directives/dc-navbar.html",
    replace: true,
    scope: {
      test: "&",
      test2: "="
    }
  };
});
