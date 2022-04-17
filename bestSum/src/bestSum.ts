
export function bestSum(targetSum: number, numbers: number[]) : number[] | null
{
    return bruteForceBestSum(targetSum, numbers);
}

// m = targetSum 
// n = numbers.length
// time: O(n^m) 
    // loop through array n times for O(n), and each time, call self recrusively till m is <= 0 for O(n^m), 
    // finally, each time copy n for O((n^m)*m)    
// space: O(2m)
    // We have to store two arrays of m length for comparison, 
    // however we drop the constant and  reduces this  to O(m)
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