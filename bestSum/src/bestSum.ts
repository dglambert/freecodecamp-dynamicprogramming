import { INumberedIndexNullableNumberArrayDictionary } from "./INumberedIndexNullableNumberArrayDictionary";

export function bestSum(targetSum: number, numbers: number[]) : number[] | null
{
    //return bruteForceBestSum(targetSum, numbers);
    //return bFSBestSum(targetSum, numbers);
    const dict: INumberedIndexNullableNumberArrayDictionary = {};
    return memoizedBestSum(targetSum, numbers, dict)
    
}

// m = targetSum 
// n = numbers.length
// time: O((n^m)*m) 
    // loop through array n times for O(n), and each time, call self recrusively till m is <= 0 for O(n^m), 
    // finally, each time copy n for O((n^m)*m)    
// space: O(2m)
    // We have to store two arrays of m length for comparison, 
    // however we drop the constant and  reduces this  to O(m)
// space: O(m^2) // CORRECTION
    // We store a bestAvailableSum number[] that has a worst case of m elements, OR O(m).
    // However we call bestSum recursively, m times. 
    // therfore our space complexity will be O(m*m) OR O(m^2)

function bruteForceBestSum(targetSum: number, numbers: number[]) : number[] | null 
{
    if(targetSum < 0)
    {
        return null;
    }
    if(targetSum == 0)
    {
        return [];    
    }

    let bestAvailableSum: number[] | null = null;

    for(const num of numbers)
    {
        const remainder = targetSum - num;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const remainderResult: (number[] | null) = bruteForceBestSum(remainder, numbers); 
        if(remainderResult !== null)
        {
            if(bestAvailableSum == null)
            {
                bestAvailableSum = [num, ...remainderResult];
            }
            else if(remainderResult.length + 1 < bestAvailableSum.length)
            {
                bestAvailableSum = [num, ...remainderResult];
            }
        } 
    }
    
    return bestAvailableSum;
}


// function bFSBestSum(targetSum: number, numbers: number[]) : number[] | null
// {
//     if(targetSum < 0)
//     {
//         return null
//     }
//     if(targetSum == 0)
//     {
//         return [];
//     }
    
//     return null;
// }

// Memoized
// time: O((m^2)*n)
    // We will loop through each of m, for O(m)
    // then for each element of m, we will call bestSum recursively n times, however due to the memoization
    // n is not exponential, but multiplicative, so O(m * n);
    // Additionally, we are copying an array of m element, n times, so O(m * n * m) OR O((m^2)*n)
// space: O(m^2) 
    // for the memo, we have a max keys of m values
    // but for each keys, our value could be an m element []
    // therfore our space complexity is O(m*m) OR O(m^2)
function memoizedBestSum(targetSum: number, numbers: number[], memo: INumberedIndexNullableNumberArrayDictionary) : number[] | null
{
    if(targetSum in memo)
    {
        return memo[targetSum];
    }

    if(targetSum < 0)
    {
        return null;
    }
    if(targetSum == 0)
    {
        return [];    
    }

    let bestAvailableSum: number[] | null = null;

    for(const num of numbers)
    {
        const remainder = targetSum - num;
        const remainderResult: (number[] | null) = memoizedBestSum(remainder, numbers, memo);
        if(remainderResult !== null)
        {
            if(bestAvailableSum == null)
            {
                bestAvailableSum = [num, ...remainderResult];
            }
            else if(remainderResult.length + 1 < bestAvailableSum.length)
            {
                bestAvailableSum = [num, ...remainderResult];
            }
        } 
    }
    memo[targetSum] = bestAvailableSum;
    return memo[targetSum];
}