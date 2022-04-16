
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

    for(let num of numbers)
    {
        let remainder = targetSum - num;
        let remainderResult = bestSum(remainder, numbers);
        if(remainderResult !== null)
        {
            return [...remainderResult, num];
        } 
    }
    
    return null;
}

