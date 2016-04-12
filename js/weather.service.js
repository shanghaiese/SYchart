(function(){

    //  declear modules
    angular
    	.module('weatherService')
    	.factory('oneDayData');

    	oneDayData.$inject = [];
    	function oneDayData(){
    		$scope.mock1 = 1;
    	}

})();
