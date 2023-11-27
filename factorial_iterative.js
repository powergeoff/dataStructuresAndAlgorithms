function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}


function factorial(num) {
    if (num === 1) return num;
    return num * factorial(num--);
}