export function howSum(targetSum: number, numbers: number[]) : number[] | null
{
    return howSumWithTrace(targetSum, numbers);
}

function howSumWithTrace(targetSum: number, numbers: number[]): number[] | null
{
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
        const remainderResult: number[] | null = howSumWithTrace(remainder, numbers);
        
        if(remainderResult !== null)
        {
            return [...remainderResult, number];
        }
    }

    return null;
}

// m = targetSum
// n = numbers.length
// 
// Brute Force
// time: O(n^m) // not considering copying the array, 
// time: O((n^m)*m) // including time for copying array
// optimization strategy, we should be focused on reducing the exponential bottleneck first, NOT the mutiplication.
// space: O(m) // worst case would be 100 [1], m would equal 100 because would be 1 x 100 = 100
