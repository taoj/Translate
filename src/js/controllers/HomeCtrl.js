angular.module('home',['multipleSelect','common'])
  .controller('HomeCtrl',[
    '$scope', 'endpoints', '$http',
    function($scope, endpoints, $http){
      $scope.message = 'hi';
      $scope.res='good lucks';

      $scope.languages = {};
      $scope.selected=[];
      $scope.langOpetions= [
        {name:'Arabic', code:'ar'},
        {name:'Chinese (Simplified)',code:'zh-CN'},
        {name:'Dutch',code:'nl'},
        {name:'French',code:'fr'},
        {name:'German',code:'de'},
        {name:'Italian',code:'it'},
        {name:'Japanese',code:'ja'},
        {name:'Korean',code:'ko'}
        ];

      $scope.languages['zh-CN'] = '';
      $scope.languages['ja'] = '';

      $scope.submit = function () {

          for(var key in $scope.languages){
            if($scope.languages.hasOwnProperty(key)){
              var url = endpoints.getTranslateUrl('en',key, $scope.source);
              $http.get(url)
                  .catch(function (error) {
                      $scope.message = error;
                  })
                  .then(function(res){
    	              var targetL = res.config.url.split("=")[3];
    	              targetL = targetL.substring(0, targetL.indexOf("&"));
                      $scope.res = targetL;
                      $scope.languages[targetL] = res.data[0][0][0];
                  });
            }
          }

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
