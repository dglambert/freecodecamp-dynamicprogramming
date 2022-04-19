
export function canConstruct(target: string, wordBank: string[]) : boolean
{
    return canConstructBruteForce(target, wordBank);
}

// m = target.length
// n = wordBank.length
// time: O(n^m) // we iterate the loop n times, but for each iteration we recurisvely call canConstruct till m is 0, so m is exponentials, so n^m
    // target.Replace is like copying an array, so we may need to account for this, we will copy m elements, 
    // O((n^m)*m) 
// space: O(m) for the target?  
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
            if(canConstruct(suffix, wordBank))
            {
                return true;
            }
        }
    }
    return false;
}
