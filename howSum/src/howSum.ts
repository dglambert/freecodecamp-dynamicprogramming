import { INumberedIndexNullableNumberArrayDictionary } from "./INumberedIndexNullableNumberArrayDictionary";

export function howSum(targetSum: number, numbers: number[]) : number[] | null
{
    const dict: INumberedIndexNullableNumberArrayDictionary = {};
    return memoizedHowSum(targetSum, numbers, dict);
}

function memoizedHowSum(targetSum: number, numbers: number[], memo: INumberedIndexNullableNumberArrayDictionary): number[] | null
{
    if(targetSum in memo)
    {
        return memo[targetSum];
    }

    if(targetSum < 0)
    {
        return null;   
    }

    if(targetSum === 0)
    {
        return [];
    }
    
    for(const number of numbers)
    {
        const remainder = targetSum - number;
        const remainderResult: number[] | null = memoizedHowSum(remainder, numbers, memo);

        if(remainderResult !== null)
        {
            memo[targetSum] = [...remainderResult, number];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

// m = targetSum
// n = numbers.length
// 
// Brute Force
// time: O(n^m) // not considering copying the array, foreach N, M will be called (recusrively), therefore n^m
// time: O((n^m)*m) // including time for copying array
// optimization strategy, we should be focused on reducing the exponential bottleneck first, NOT the mutiplication.
// space: O(m) // worst case would be 100 [1], m would equal 100 because would be 1 x 100 = 100
// 
// Memoized
// time: O(n*m) // not considering copying the array, foreach N, M will be called, however howSum()  will never be called twice,
// with same value for M, because we have memoized the solution, therefore n*m
// time: O(n*m*m) OR simplifies to O(n*m^2) // including time for copying array
// space: O(m) // space accounting for just the keys 
// space: O(m*m) // space account for the keys PLUS, the values of each key, which is, worst case a number[] of m elements. 
// space: simplified to O(m^2)
