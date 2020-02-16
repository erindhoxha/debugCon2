
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
      var done = 0;
      $scope.animateElementIn = function($el) {
        if (done == 0) {
          $el.removeClass("hidden");
          $el.addClass("fadeIn");
           done = 1;
        }
      };

      $scope.animateElementOut = function($el) {
        if (done == 0) {
          $el.addClass("hidden");
          $el.removeClass("fadeIn");
          done = 1;
        }
      };

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

          if ($location.hash() == 'kontakti') {
            startSVGAnimationMain($("#dc-mail"));
          }

        } else {
          // call $anchorScroll() explicitly,
          // since $location.hash hasn't changed
          $anchorScroll(500);
        }
      };
    }
  ]).value('duScrollOffset', 30);