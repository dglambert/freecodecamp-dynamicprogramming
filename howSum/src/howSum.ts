export function howSum(targetSum: number, numbers: number[]) : number[] | null
{
    return howSumWithTrace(targetSum, numbers, []);
}

function howSumWithTrace(targetSum: number, numbers: number[], usedNumbers: number[]): number[] | null
{
    if(targetSum < 0)
    {
        return null;   
    }
    if(targetSum === 0)
    {
        return usedNumbers;
    }
    
    for(let i = 0; i < numbers.length; i++)
    {
        const tempUsedNumbers: number[] = [];
        usedNumbers.forEach(usedNumber => {
            tempUsedNumbers.push(usedNumber);
        });
        tempUsedNumbers.push(numbers[i]);
        const newTargetSum: number = targetSum - numbers[i];
        const trace: number[] | null = howSumWithTrace(newTargetSum, numbers, tempUsedNumbers);
        
        if(trace != null)
        {
            return trace;
        }
    }

    return null;
}