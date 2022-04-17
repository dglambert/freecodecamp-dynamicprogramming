
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

