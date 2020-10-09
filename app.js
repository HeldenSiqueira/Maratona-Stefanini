(function (){
    "use strict";

    angular
        .module('app', [])
        .controller('controlador', function(){
            $scope.nome = 'Helden';
            $scope.contador = 10;
        });
    angular
        .module('app2',[])
        .controller('controlador', function(){
            $scope.nome = 'Helden';
            $scope.contador = 10;
    });





})();