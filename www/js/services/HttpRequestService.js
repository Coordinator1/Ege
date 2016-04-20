/**
 * HttpRequest Service
 */
ege.factory('HttpRequestService', ['$http', function($http) {
    // var user = $localStorage.getObject('user');
    return {
        getData: function(argument) {
            return $http.get('https://unitest.tv/api/' + argument)
                .then(function(response) {
                        return response;
                        // console.log("$http === data", data)
                    },
                    function(error) {
                        return error;
                        // console.log("$http === error", error)
                    });
                        // console.log("$http === $scope.response", $scope.response)

        }
    };

    /*var getData = function(argument) {
        return $http.get('https://unitest.tv/api/' + 'get_categories/0')
            .then(function(response) {
                return response;
                    // console.log("$http === response", response)
                },
                function(error) {
                    // return error;
                    // console.log("$http === error", error)
                });

    };
*/
    /*return {
        getData: getData
    };*/

    /*$http.get($scope.APIRoute + 'get_categories/0')
    .then(function(response){
            console.log("$http === response", response)
    },
    function(error){
            console.log("$http === error", error)
    });*/


}]);
