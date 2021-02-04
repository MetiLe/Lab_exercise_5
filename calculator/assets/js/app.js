btn = document.querySelectorAll(".cols")
btns = document.querySelector(".btn-container")
input_display = document.getElementById('input-display')
result_display = document.getElementById('result-display')
num = ""
btns.addEventListener("click", e=>{
    var li = e.target;
    var span = li.querySelector('h3');
    var text_value = span.innerHTML
    var p = /\d/    
    input_display.innerHTML += text_value
    if (text_value.match(p)){
        num += text_value
        console.log(num)
    }else{
        helper(parseInt(num))
        console.log(num)
        helper(text_value); 
        num ='' 
    }  
    
})
num_stack = []
operation_stack = []
count = 0
function helper(input){
    if (count % 2 == 0){
        num_stack.push(parseFloat(input))
        
    }else{
        operation_stack.push(input)
    }
    if (input == "="){
        while (num_stack.length > 1){
            if ( operation_stack[0] == "+"){
                answer = add(num_stack[0], num_stack[1])
            }
            if (operation_stack[0] == "-"){
                answer = sub(num_stack[0], num_stack[1])
            }
            if (operation_stack[0] == "x"){
                answer = mul(num_stack[0], num_stack[1])
            }
            if (operation_stack[0] == "/"){
                answer = divide(num_stack[0], num_stack[1])
            }
            operation_stack.shift();
            num_stack.shift();
            num_stack.shift();
            num_stack.unshift(answer)
        }            
            result_display.innerHTML = answer
            num_stack = []
            operation_stack = []
            count = 0
            input_display.innerHTML = ""
    }
    else{ 
        if (input == "C"){
            input_display.innerHTML = ""
            result_display.innerHTML = ""            
        }
        count = count + 1
    }
}

add = (a,b)=>{    
    return a + b
}
mul = (a,b)=>{
    return a * b
}
sub = (a , b)=>{
    return a - b
}
divide = (a, b) =>{
    if (b == 0){
        result_display.innerHTML = "Divison by zero in inhibited!!"
        return 
    }else{
        return a / b
    }
}

