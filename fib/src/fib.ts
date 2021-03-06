
export function fib(n: number, algorithmOption: AlgorithmOption) : number {
    
    if(algorithmOption == AlgorithmOption.Memoized) {        
        const memo: IHash = {};
        return memoizedFib(n, memo);
    }
    return fibWithOutMemoization(n);
}

function memoizedFib(n: number, memo: IHash) : number {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = memoizedFib(n-1, memo) + memoizedFib(n-2, memo);
    return memo[n];
}

function fibWithOutMemoization(n: number) : number {
    if(n <= 2) return 1;
    return fibWithOutMemoization(n-1) + fibWithOutMemoization(n-2);
}
    
export interface IHash {
    [details: number] : number;
} 

export enum AlgorithmOption {
    default,
    Memoized
}
