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