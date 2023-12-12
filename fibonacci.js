
//1,1,2,3,5,8,etc...
//don't pass anything bigger than like 20
//SUPER INEFFICIENT O(2^n) exponential
function fib(number) {
    if(number < 3) return 1;
    return fib(number - 1) + fib(number - 2);
 }
 

 //using memoization
 const efficientFib = (number, memo = []) => {
    //O(n)
    if(memo[number]) return memo[number];
    if (number <= 2) return 1;
    let res = efficientFib(number - 1, memo) + efficientFib(number - 2, memo);
    memo[number] = res;
    return memo[number]
 }

 //using tabulation
 const tabulatedFib = (n) => {
    if (n <= 2) return 1;
    var fibnums = [0,1,1];
    for(let i = 3; i <= n; i++){
       fibnums[i] = fibnums[i - 1] + fibnums[i - 2];
    }
    return fibnums[n];
 }