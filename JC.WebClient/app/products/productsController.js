(function () {
    'use strict';

    var controllerId = 'ProductsController';

    angular
        .module('app')
        .controller(controllerId, productsController);

    productsController.$inject = ['$location']; 

    function productsController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'productsController';

        activate();

        function activate() { }
    }
})();
