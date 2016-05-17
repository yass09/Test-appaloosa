app.controller("storeUsersCtrl", ["$scope", "$http", function ($scope, $http){
    
    $http.get("users.json").then(function(users){
        $scope.userData = users.data;
        console.log($scope.userData);
    });
    
}]);