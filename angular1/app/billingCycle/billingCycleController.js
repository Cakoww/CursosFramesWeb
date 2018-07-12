(function(){

    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        'tabs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs, tabs){

        /* jshint validthis: true */
        const vm = this;
        const url = 'http://localhost:3003/api/billingCycles' 

        vm.refresh = function(){
            $http.get(url).then(function(response){
                vm.billingCycle = { credits:[{}] , debts:[{}] }
                vm.billingCycles = response.data
                tabs.show(vm, { tabList: true, tabCreate: true }) 

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

        vm.showTabUpdate = function(billingCycle){

            vm.billingCycle = billingCycle
            tabs.show(vm, {tabUpdate: true})

        }

        vm.showTabDelete = function(billingCycle){

            vm.billingCycle = billingCycle
            tabs.show(vm, {tabDelete: true})

        }

        /*Função responsável pela exclusao do registro, ao clicar na table de delete o vm.billingCycle já foi selecionado */
        vm.delete = function(){

            const deleteUrl = `${url}/${vm.billingCycle._id}`
            $http.delete(deleteUrl, vm.billingCycle).success(function(response){
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function(response){
                msgs.addError(response.data.errors)
            })
            
        }

        /*Função responsável pela alteracao do registro, ao clicar na table de delete o vm.billingCycle já foi selecionado */
        vm.update = function(){

            const updateUrl = `${url}/${vm.billingCycle._id}`
            $http.put(updateUrl, vm.billingCycle).success(function(response){
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function(response){
                msgs.addError(response.data.errors)
            })

        }



        vm.refresh()

    }


})()