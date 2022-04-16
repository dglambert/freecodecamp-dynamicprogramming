
export function bestSum(targetSum: number, numbers: number[]) : number[] | null
{
    if(targetSum < 0)
    {
        return null;
    }
    
    return [...numbers, targetSum];
}

