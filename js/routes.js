
// CONFIG ROUTER
debugConModule.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/home.html",
      controller: "homeController"
    })
    .when("#/prezanto", {
      templateUrl: "pages/prezanto.html",
      controller: "homeController"
    });
});
