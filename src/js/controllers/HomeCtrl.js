angular.module('home',['common'])
  .controller('HomeCtrl',[
    '$scope', 'endpoints', '$http',
    function($scope, endpoints, $http){
      $scope.message = 'hi';
      $scope.res='good lucks';

      $scope.languages = {};

      $scope.languages['zh-CN'] = '';
      $scope.languages['ja'] = '';

      $scope.submit = function () {
          var url = endpoints.getTranslateUrl('auto','zh-CN', $scope.source);

          $http.get(url)
              .catch(function (error) {
                  $scope.message = error;
              })
              .then(function(res){
               //     $scope.res = res.data[0][0][0];
	              var targetL = res.config.url.split("=")[3];
	              targetL = targetL.substring(0, targetL.indexOf("&"));
                  $scope.res = targetL;
              });
      }

      var process = function(tl){
	      var url = endpoints.getTranslateUrl('en',tl, $scope.source);

	      $http.get(url)
		      .catch(function (error) {
			      $scope.message = error;
		      })
		      .then(function(res){
			      $scope.res = res.data[0][0][0];
		      });
      };
    }
  ])
