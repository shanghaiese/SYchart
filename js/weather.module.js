(function(){

    //  declear modules
    angular.module('weatherService', []);
    angular.module('weatherConfig', []);
    angular.module('homepage', ['weatherService','weatherConfig']);

})();
