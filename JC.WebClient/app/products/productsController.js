(function () {
    'use strict';

    var controllerId = 'ProductsController';

    angular
        .module('app')
        .controller(controllerId, ['productResource', productsController]);

    //productsController.$inject = ['productResource'];

    function productsController(productResource) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'productsController';

        productResource.query(function (data) {
                vm.products = data;
            });

    }
})();
