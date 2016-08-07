myApp.controller('earthquakesController', function($scope, earthquakeFactory){
  earthquakeFactory.index(function(quakes){
    $scope.quakes = quakes;
  })

  earthquakeFactory.quakeDataApi(function(quakeData){
    $scope.quakeData = quakeData.features;
    console.log(quakeData);
    console.log($scope);
  })
})
