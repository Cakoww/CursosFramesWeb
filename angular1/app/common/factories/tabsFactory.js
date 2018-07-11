(function(){
    /*Factory criada para controlar a exibição das abas */
    angular.module('primeiraApp').factory('tabs', [TabsFactory])


    function TabsFactory(){

        /*o objeto com os parametros tabList,tabCreate,tabUpdate e tabDelete por padrão false*/
        function show(owner, {
            tabList = false,
            tabCreate = false,
            tabUpdate = false,
            tabDelete = false
        }){

            owner.tabList = tabList
            owner.tabCreate = tabCreate
            owner.tabUpdate = tabUpdate
            owner.tabDelete = tabDelete

           

        }

        return { show }

    }


})()