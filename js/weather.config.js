(function(){

    //  declear modules
    angular
    	.module('weatherConfig')
    	.config(route);

    	route.$inject = [];
    	function route(){
    		$scope.mock = 1;
    	}

})();