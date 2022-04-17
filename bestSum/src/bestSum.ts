
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

    for(const num of numbers)
    {
        const remainder = targetSum - num;
        const remainderResult = bestSum(remainder, numbers);
        if(remainderResult !== null)
        {
            return [...remainderResult, num];
        } 
    }
    
    return null;
}

