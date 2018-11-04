

function solve(){

    var stack = [];
    this.solvestring = function(value){
        value = value.split(" ");

        for(var i = 0; i < value.length; i++){
            if(value[i].isNumeric()){
                value.push(value[i]);
            }
            else{
                var val1 = value.pop();
                var val2 = value.pop();






            }
        }
         

    }

}