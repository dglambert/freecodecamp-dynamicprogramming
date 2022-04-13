export function howSum(targetSum: number, numbers: number[]) : number[] | null
{
    return howSumWithTrace(targetSum, numbers, []);
}

function howSumWithTrace(targetSum: number, numbers: number[], usedNumbers: number[]): number[] | null
{
    if(targetSum === 0)
    {
        usedNumbers;
    }

    
    for(let i = 0; i < numbers.length; i++)
    {
        // /tempUsedNumbers = usedNumbers;
        // need to figure list implementation for tempUsedNumbers
        //tempUsedNumbers.Add(); 
        //howSumWithTrace(targetSum, numbers, tempUsedNumbers);

    }

    return null;
}