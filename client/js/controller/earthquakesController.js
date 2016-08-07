myApp.controller('earthquakesController', function($scope, earthquakeFactory){
  earthquakeFactory.index(function(quakes){
    $scope.quakes = quakes;
  })

  earthquakeFactory.quakeDataApi(function(quakeData){
    $scope.quakeData = quakeData.features.properties;
    console.log($scope.quakeData);
    console.log("Hello!")
  })
})
