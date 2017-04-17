angular.module('home',['common'])
  .controller('HomeCtrl',[
    '$scope', 'endpoints', '$http',
    function($scope, endpoints, $http){
      $scope.message = 'hi';
      $scope.res='good lucks';

      $scope.submit = function () {
          var url = endpoints.getTranslateUrl('auto','zh-CN', $scope.source);

          $http.get(url)
              .catch(function (error) {
                  $scope.message = error;
              })
              .then(function(res){
                    $scope.res = res.data[0][0][0];
              });
      }
    }
  ])
