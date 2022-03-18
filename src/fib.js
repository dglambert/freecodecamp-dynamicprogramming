function fib(n) {
    var memo = {};
    return memoizedFib(n, memo);
}
function memoizedFib(n, memo) {
    if (n in memo)
        return memo[n];
    if (n <= 2)
        return 1;
    memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
    return memo[n];
}
// TODO: convert these to test cases 
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
