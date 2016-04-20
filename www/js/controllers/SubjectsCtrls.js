ege.controller('SubjectsCtrl', ['$scope', '$http', '$cordovaDevice', '$timeout', '$rootScope', '$location', 'HttpRequestService', function($scope, $http, $cordovaDevice, $timeout, $rootScope, $location, HttpRequestService) {

    $timeout(function() {
        document.addEventListener("deviceready", function() {
            $scope.device = $cordovaDevice.getDevice();
            $scope.cordova = $cordovaDevice.getCordova();
            $scope.model = $cordovaDevice.getModel();
            $scope.platform = $cordovaDevice.getPlatform();
            $scope.uuid = $cordovaDevice.getUUID();
            $scope.version = $cordovaDevice.getVersion();
        }, false);

        /*var dataPurchase = localStorageService.get(key, defaultValue);
        if (dataPurchase) {
            // Open sabjects to visible
        } else {
            // Making a request to Google Play & if return true, open sabjects to visible
        };


        $rootScope.userData = JSON.parse(window.localStorage['userData']);
        console.log("mainCtrl --- $timeout --- $rootScope.userData", $rootScope.userData);

        $scope.userPassword = JSON.p
        arse(window.localStorage['userPassword']);
        console.log("mainCtrl --- doRegister --- $scope.userPassword", $scope.userPassword);

        if ($rootScope.userData) {
            //$scope.userName = $rootScope.userData.user_name;
            $scope.menuEnterString = true;
        } else {
            $scope.userName = "Гость";
            $scope.menuEnterString = false;
        };*/

    }, 100);

    // console.log($scope.subjects);
    if (!$scope.subjects) {
        $scope.showLoading();

        HttpRequestService.getData('get_categories/0').then(function(ressponse) {
            $scope.subjects = ressponse.data;

            angular.forEach($scope.subjects, function(value, key) {
                console.log("value.cat_url_title", value.cat_url_title);

                switch (value.cat_url_title) {
                    case "informatics":
                        value.color = "#56b0b5";
                        break;
                    case "history":
                        value.color = "#0071c2";
                        break;
                    case "russian":
                        value.color = "#e04592";
                        break;
                    case "english":
                        value.color = "#ba45b5";
                        break;
                    case "social":
                        value.color = "#00b81f";
                        break;
                    case "physics":
                        value.color = "#ffD35C";
                        break;
                    case "geographics":
                        value.color = "#ff5151";
                        break;
                    case "composition":
                        value.color = "#f46182";
                        break;
                    case "literature":
                        value.color = "#35a776";
                        break;
                    case "biology":
                        value.color = "#82b526";
                        break;
                    case "chemistry":
                        value.color = "#8b75e9";
                        break;
                    case "math":
                        value.color = "#ff5151";
                        break;
                    default:
                        value.color = "#d3d3d3";
                }
            });
            console.log("$scope.subjects", $scope.subjects);

        }).finally(function() {
            $scope.hideLoading();
        });
    };

    $scope.goToTopics = function(selectedSubject) {
        $rootScope.selectedSubjectName = selectedSubject.cat_name;
            console.log("selectedSubject", selectedSubject);

        $location.path('/topics/' + selectedSubject.cat_id);
    }

}]);
