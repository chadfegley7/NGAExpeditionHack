// myApp.factory('earthquakeFactory', function($http){
//   var factory = {};
//   var quakes = [];

//   factory.index = function(callback){
//     $http.get('/').success(function(output){
//       quakes = output;
//       callback(quakes);
//       // console.log(output);
//     })
//   }

//   factory.quakeDataApi = function(callback){
//     $http.get("https://data.humdata.org/dataset/4881d82b-ba63-4515-b748-c364f3d05b42/resource/e5722a70-d599-47b9-b7b8-17ed63107076/download/earthquakes1970-2014.json").success(function(output){
//       callback(output);
//       // console.log(output);
//       allQuakes = output.features;
//       // console.log(allQuakes);

//     })
//   }
//   return factory;
// });
