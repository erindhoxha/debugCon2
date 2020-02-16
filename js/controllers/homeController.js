
angular
  .module("debugConModule")
  .run([
    "$anchorScroll",
    function($anchorScroll) {
      $anchorScroll.yOffset = 100; // always scroll by 50 extra pixels
    }
  ])
  .controller("homeController", [
    "$anchorScroll",
    "$location",
    "$scope",
    function($anchorScroll, $location, $scope) {

    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 5000).then(function() {
        console && console.log("You just scrolled to the top!");
      });
    };

      $scope.gotoAnchor = function(x, e) {
        var newHash = x;
        if ($location.hash() !== newHash) {
          // set the $location.hash to `newHash` and
          // $anchorScroll will automatically scroll to it
          $location.hash(x);
        } else {
          // call $anchorScroll() explicitly,
          // since $location.hash hasn't changed
          $anchorScroll(500);
        }
      };
    }
  ]).value('duScrollOffset', 30);