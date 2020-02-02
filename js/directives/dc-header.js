// DIRECTIVES
debugConModule.directive("dcHeader", function() {
  return {
    restrict: "E",
    templateUrl: "../js/directives/dc-header.html",
    replace: true,
    scope: {
      consoleLog: "&",
      weatherDay: "="
    }
  };
});
