

export function canSum(targetNumber: number, numbers: number[]) : boolean 
{
    if(targetNumber < 0)
    {
        return false;
    }

    for(let i = 0; i < numbers.length; i++)
    {
        const newTargetNumber = targetNumber - numbers[i];
        
        if(newTargetNumber === 0)
        {
            return true;
        }

        if( canSum(newTargetNumber, numbers) )
        {
            return true;
        }
    }

    return false;
}
