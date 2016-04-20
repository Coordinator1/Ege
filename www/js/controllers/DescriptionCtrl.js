ege.controller('DescriptionCtrl', function($scope, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

    $scope.allImages = [{
        src: 'img/ionic.png'
    }];

    $scope.zoomMin = 1;

    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/gallery-zoomview.html');
    };

    $scope.showModal = function(templateUrl) {
        $ionicModal.fromTemplateUrl(templateUrl, {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    }

    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove()
    };

    // $scope.updateSlideStatus = function(slide) {
    //     var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
    //     if (zoomFactor == $scope.zoomMin) {
    //         $ionicSlideBoxDelegate.enableSlide(true);
    //     } else {
    //         $ionicSlideBoxDelegate.enableSlide(false);
    //     }
    // };
});
