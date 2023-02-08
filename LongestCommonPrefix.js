var isValid = function(s) {
    let closed = {
        "}" : "{",
        ")":"(",
        "]":"["
    }

    let stack = []
    for (const l of s) {
        if
        (!closed[l]){
            stack.push(l)
        }
        else
        {
            if(stack.pop() != closed[l]){
                return false
            }
           
        }
        // console.log(l)
    }
    
    return !stack.length
};


console.log(
    isValid("()[]{}"))