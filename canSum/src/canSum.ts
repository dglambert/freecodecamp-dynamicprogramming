

export function canSum(targetNumber: number, numbers: number[]) : boolean 
{
    const memo: IHash = {};
    return memoizedCanSum(targetNumber, numbers, memo);
}

function memoizedCanSum(targetNumber: number, numbers: number[], memo: IHash) : boolean 
{
    if(targetNumber in memo)
    {
        return memo[targetNumber];
    }

    if(targetNumber < 0)
    {
        return false;
    }

    if(targetNumber === 0)
    {
        return true;
    }

    for(let i = 0; i < numbers.length; i++)
    {
        const remainder = targetNumber - numbers[i];
        
        if( memoizedCanSum(remainder, numbers, memo) )
        {
            memo[remainder] = true;
            return true;
        }
    }
    memo[targetNumber] = false;
    return false;
}

interface IHash {
    [details: number] : boolean;
} 