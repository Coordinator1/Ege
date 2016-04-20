ege.controller('TopicsCtrl', ['$scope', '$http', '$stateParams', 'HttpRequestService', function($scope, $http, $stateParams, HttpRequestService) {

    $scope.showLoading();

    HttpRequestService.getData('get_categories/' + $stateParams.subject_ID).then(function(ressponse) {
        $scope.categoriesList = ressponse.data;

        console.log("$scope.categoriesList", $scope.categoriesList);

    }).finally(function() {
        $scope.hideLoading();
    });


    $scope.updateCategoriesPage = function() {
        $scope.showLoading();

    HttpRequestService.getData('get_categories/' + $stateParams.subject_ID).then(function(ressponse) {
        $scope.categoriesList = ressponse.data;

        console.log("$scope.categoriesList", $scope.categoriesList);

    }).finally(function() {
        $scope.hideLoading();
    });
        $scope.$broadcast('scroll.refreshComplete');
    };

}]);
