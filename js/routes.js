
// CONFIG ROUTER
debugConModule.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "pages/home.html",
    controller: "homeController"
  });
});
