(function(){

    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs){

        /* jshint validthis: true */
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = function(){
            $http.get(url).then(function(response){
                vm.billingCycles = {}
                vm.billingCycles = response.data

            })
        }

        vm.create = function(){
            
            $http.post(url, vm.billingCycles).then(function(response){
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function(response){
                msgs.addError(response.data.errors)
            })
        }



        vm.refresh()

    }


})()