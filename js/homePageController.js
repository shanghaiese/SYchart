
(function() {

    angular.module('homepage')
        .controller('homeViewCtrl', homeViewCtrl);

    homeViewCtrl.$inject = ['$scope'];

    function homeViewCtrl($scope) {
        $scope.demo = '1';
        $scope.mockPictureName = 'tdc1pr1s1';
        var pictureUrl = $scope.mockPictureName + '.png';
        $scope.pictureName = pictureUrl;
    }
})();