// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ege = angular.module('ege', ['ionic', 'ngCordova'])

ege.run(function($ionicPlatform, $ionicLoading, $rootScope) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

        if ((window.device && device.platform == "Android") && typeof inappbilling !== "undefined") {
            /*inappbilling.init(function(resultInit) {
                    $rootScope.resultInit = resultInit;
                    inappbilling.getPurchases(function(result) {
                            $rootScope.resultGetPurchases = result;
                            console.log("PURCHASE RESPONSE -> " + JSON.stringify(result));
                        },
                        function(errorPurchases) {
                            console.log("PURCHASE ERROR -> " + errorPurchases);
                        });

                    inappbilling.getAvailableProducts(function(result) {
                            $rootScope.availableProdResult = result;
                            console.log("PURCHASE RESPONSE -> " + JSON.stringify(result));
                            //                                $scope.showAlertAndroidAvailableProducts(result);
                        },
                        function(errorPurchases) {
                            console.log("PURCHASE ERROR -> " + errorPurchases);
                        });
                },
                function(errorInit) {
                    console.log("INITIALIZATION ERROR -> " + errorInit);
                }, { showLog: true }, ["level2", "level3"]);*/
        };
    });

    $rootScope.buyContent = function(index) {
        console.log("$scope.buyLevel -> ", index);
        if ($rootScope.userData) {
            var idLevel = ++index;
            var levelBuy = "level" + idLevel;
            // console.log("$scope.levelBuy -> ", levelBuy);

            $scope.showConfirmBuyLevel(levelBuy, idLevel);
        } else {
            $scope.showAlert();
        }

    };

    /**
     * Show ionic loader
     */
    $rootScope.showLoading = function() {
        $ionicLoading.show();
    };

    /**
     * Hide ionic loader
     */
    $rootScope.hideLoading = function() {
        $ionicLoading.hide();
    };

    /**
     * Close pull loading
     */
    $rootScope.refreshComplete = function() {
        $rootScope.$broadcast('scroll.refreshComplete');
    };
});
