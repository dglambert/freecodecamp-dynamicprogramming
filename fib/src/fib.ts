

function fib(n: number) : number {
    var memo = {};
    return memoizedFib(n, memo);
    //return fibWithOutMemoization(n);
}


function memoizedFib(n: number, memo: any) : number {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = memoizedFib(n-1, memo) + memoizedFib(n-2, memo);
    return memo[n];
}

function fibWithOutMemoization(n: number) : number {
    if(n <= 2) return 1;
    return fibWithOutMemoization(n-1) + fibWithOutMemoization(n-2);
}
    
export default fib;