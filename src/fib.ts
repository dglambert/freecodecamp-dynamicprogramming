

function fib(n: number) : number {
    var memo = {};
    return memoizedFib(n, memo);
}


function memoizedFib(n: number, memo: any) : number {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = memoizedFib(n-1, memo) + memoizedFib(n-2, memo);
    return memo[n];
}
    
export default fib;