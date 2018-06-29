(function(){
    angular.module('primeiraApp').component('field', {
        bindings:{
            id: '@',
            label:'@',
            grid: '@',
            placeholder: '@',
            type: '@',
        }, 

        //importa o gridSystem, e já executa a função no grid.
        controller: [
            'gridSystem',
            function(gridSystem){
                this.gridClasses = gridSystem.toCssClasses(this.grid)
            }
        ],

        template: 
        `<div class="{{$ctrl.gridClasses}}">
            <div class="form-group">
                <label for="{{$ctrl.id}}">{{$ctrl.label}}</label>
                <input id="{{$ctrl.id}}" class="form-control" placeholder="{{$ctrl.placeholder}}" type="{{$ctrl.type}}"/>
            </div>
        </div>`
    })



})()