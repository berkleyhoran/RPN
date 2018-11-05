function solve(value){ 

        value = value.split(" ");
        var stack = [];

        for(var i = 0; i < value.length; i++){
            if(!isNaN(value[i])){
                stack.push(value[i]);
            } else{
                var val1 = stack.pop();
                var val2 = stack.pop();
                    if (value[i] === "+"){
                        stack.push(parseInt(val2) + parseInt(val1));
                    }
                    else if (value[i] === "-"){
                        stack.push(parseInt(val1) - parseInt(val2));
                    }
                    else if (value[i] === "*"){
                        stack.push(parseInt(val1) * parseInt(val2));
                    }
                    else if (value[i] === "/"){
                        stack.push(parseInt(val2) / parseInt(val1));
                    }
                    else if (value[i] === "^"){
                        stack.push(Math.pow(parseInt(val1), parseInt(val2)));
                    }

            }
        }
        

        if(stack.length < 0){
            return "error";
        }
        else{
            return stack.pop()
        }

         

}

    //bug fix from stack overflow, doesnt work but now NAN does...
    String.prototype.isNumeric = function() {
        return !isNaN(parseFloat(this)) && isFinite(this);
    }

    function input(){

        var equation = document.getElementById("input").value;

        //success!!
        if(equation.length > 1){
        alert(solve(equation))
        }
         else{
        alert("INSERT EQUATION")
        }
    }
    