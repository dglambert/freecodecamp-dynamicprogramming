

export function canSum(targetNumber: number, numbers: number[]) : boolean 
{
    let sum: number = 0;
    for(let i = 0; i < numbers.length; i++)
    {
        if(targetNumber % numbers[i]  === 0)
        {
            return true;
        }
    
        if(i > 0  && sum + numbers[i] === targetNumber)
        {
            return true;
        }
        sum = sum + numbers[i];
        
    }
    return false;
}
