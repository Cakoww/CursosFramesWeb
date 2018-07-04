(function(){
    angular.module('primeiraApp').factory('msgs', [
        'toastr',
        MsgsFactory
    ])

    function MsgsFactory(toastr){
        


        function addSuccess(msgs){
            addMsgs(msgs, 'Sucesso', 'success')
        }

        function addError(msgs){
            addMsgs(msgs, 'Erro', 'error')
        }
        
        function addMsgs(msgs, title, method){

            if(msgs instanceof Array){
                msgs.forEach(msg => toastr[method](msg, title))
            }else{
                toastr[method](msgs, title)
            }

        }
        
        
        return {addSuccess, addError}
    }

    



})()