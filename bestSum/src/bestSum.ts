
export function bestSum(targetSum: number, numbers: number[]) : number[] | null
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
        const remainderResult: (number[] | null) = bestSum(remainder, numbers);
        if(remainderResult !== null)
        {
            if(bestAvailableSum == null)
            {
                bestAvailableSum = [...remainderResult, num];
            }
            else if(remainderResult.length + 1 < bestAvailableSum.length)
            {
                bestAvailableSum = [...remainderResult, num];
            }
        } 
    }
    
    return bestAvailableSum;
}

