import { IStringIndexNumberDictionary} from "./IStringIndexNumberDictionary";

export function countConstruct(target: string, wordBank: string[]) : number
{
    //return countConstructBruteForce(target, wordBank);
    const dictionary: IStringIndexNumberDictionary = {};
    return countConstructMemoized(target, wordBank, dictionary);
}


// m = target lenth
// n = wordBank lenght
// time: O(n*m^2)
// space: O(m^2)
function countConstructMemoized(target: string, wordBank: string[], memo: IStringIndexNumberDictionary) : number
{
    if(target in memo)
    {
        return memo[target];
    }

    if(target.length == 0)
    {
        memo[target] = 1;
        return memo[target];
    }

    let count = 0;

    for(const word of wordBank)
    {
        if(target.indexOf(word) === 0)
        {
            const remaineder = target.slice(word.length);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            count = count + countConstructMemoized(remaineder, wordBank, memo)
        }
    }
    memo[target] = count;
    return memo[target];
}



function countConstructBruteForce(target: string, wordBank: string[]) : number
{
    if(target.length == 0)
    {
        return 1;
    }

    let count = 0;

    for(const word of wordBank)
    {
        if(target.indexOf(word) === 0)
        {
            const remaineder = target.slice(word.length);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            count = count + countConstructBruteForce(remaineder, wordBank);

        }
    }
    
    return count;
}
