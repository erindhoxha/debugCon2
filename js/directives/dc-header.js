// DIRECTIVES
debugConModule.directive("dcHeader", function() {
  return {
    restrict: "E",
    templateUrl: "dc-header.html",
    replace: true,
    scope: {
      consoleLog: "&",
      weatherDay: "="
    }
  };
});
