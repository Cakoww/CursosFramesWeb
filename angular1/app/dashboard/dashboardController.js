(function(){
    
    angular.module('primeiraApp').controller('DashboardCtrl', [
        '$http',
        DashboardController
    ])
    
    function DashboardController($http){
        
        /* jshint validthis: true */
        const vm = this
    
        vm.getSummary = function(){
            const url = 'http://localhost:3003/api/billingSummary'
    
            /*Na linha abaixo, já pega o credit e debt de dentro do response,
            e seta 0 caso o valor seja negativo */
            $http.get(url).then( function(response){
    
                console.log(response.data)
                const {credit = 0, debt= 0} = response.data
    
                vm.credit = credit
                vm.debt = debt
                vm.total = credit - debt     
            })
    
        }
    
        vm.getSummary()
    
    }

    
})()

