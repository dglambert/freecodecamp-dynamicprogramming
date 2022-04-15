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
            tempUsedNumbers.push(usedNumber); // BOTTLENECK: Swap w/ List for better performance OR initialize array to usedNumbers.length + 1
        });
        tempUsedNumbers.push(numbers[i]); // BOTTLENECK: Swap w/ List for better performance OR initialize array to usedNumbers.length + 1 
        const newTargetSum: number = targetSum - numbers[i];
        const trace: number[] | null = howSumWithTrace(newTargetSum, numbers, tempUsedNumbers);
        
        if(trace != null)
        {
            return trace;
        }
    }

    return null;
}