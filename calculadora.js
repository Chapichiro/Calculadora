function sumar (a,b){
    return a + b;
}
console.log(sumar(1,1));

function restar (a,b){
    return a - b;
}

console.log(restar(1,1));

function multi (a,b){
    return a * b;
}
console.log(multi(10,1));

function divi (a,b){
    if (b  == 0){
    return "ERROR: no se puede dividir entre 0";
    }else{
        return a / b;
    }
}