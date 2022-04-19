import { IStringIndexBooleanDictionary } from "./IStringIndexBooleanDictionary";

export function canConstruct(target: string, wordBank: string[]) : boolean
{
    //return canConstructBruteForce(target, wordBank);
    const memo = {};
    return canConstructMemoized(target, wordBank, memo);
}

// m = target.length
// n = wordBank.length
// time: O(n^m) // we iterate the loop n times, but for each iteration we recurisvely call canConstruct till m is 0, so m is exponentials, so n^m
    // target.Replace is like copying an array, so we may need to account for this, we will copy m elements, 
    // O((n^m)*m) 
// space: O(m^2) // m for the stack, multiplied m for suffix;   
function canConstructBruteForce(target: string, wordBank: string[]) : boolean
{
    if(target.length == 0)
    {
        return true;
    }

    for(const word of wordBank)
    {
        if(target.indexOf(word) == 0)
        {
            const suffix = target.replace(word, "");
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            if(canConstructBruteForce(suffix, wordBank))
            {
                return true;
            }
        }
    }
    return false;
}

// m = target.length
// n = wordBank.length
// time: O(n*m^2) // we loop through wordbank n times, however we only recurse at most m times, 
    // because we do not pursue same elments twice due to memoization. 
    // Additionally we have second m for copying the target string. 
// space: O(m^2)
function canConstructMemoized(target: string, wordBank: string[], memo: IStringIndexBooleanDictionary) : boolean
{
    if(target in memo)
    {
        return memo[target];
    }

    if(target.length == 0)
    {
        return true;
    }

    for(const word of wordBank)
    {
        if(target.indexOf(word) == 0)
        {
            const suffix = target.replace(word, "");
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            if(canConstructMemoized(suffix, wordBank, memo))
            {
                memo[target] = true;
                return memo[target];
            }
        }
    }
    memo[target] = false;
    return memo[target];
}