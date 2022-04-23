import { IStringIndexedStringMultiDimArrayDictionary } from "./IStringIndexedStringMultiDimArrayDictionary";

export function allConstruct(target: string, wordBank: string[]) : string[][]
{
    //return bruteForceAllConstruct(target, wordBank); 
    const memo:IStringIndexedStringMultiDimArrayDictionary = {}
    return memoizedAllConstruct(target, wordBank, memo);

}

// m = target length
// n = wordBank length
// time: O((n^m)*m^4)
// space: O(m^4)
function bruteForceAllConstruct(target: string, wordBank: string[]) : string[][]
{
    if(target.length == 0)
    {
        return [[]];
    }

    let results: string[][] = [];

    for(const word of wordBank)
    {
        if(target.indexOf(word) == 0)
        {
            const suffix = target.slice(word.length);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const temps: string[][] = bruteForceAllConstruct(suffix, wordBank);
            for(const temp of temps)
            {
                const constructed : string[] = [ word, ...temp];
                results = [...results, constructed];    
            }
        }
    }
    return results;
}


function memoizedAllConstruct(target: string, wordBank: string[], memo: IStringIndexedStringMultiDimArrayDictionary) : string[][]
{
    if(target in memo)
    {
        return memo[target];
    }

    if(target.length == 0)
    {
        return [[]];
    }

    let results: string[][] = [];

    for(const word of wordBank)
    {
        if(target.indexOf(word) == 0)
        {
            const suffix = target.slice(word.length);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const temps: string[][] = memoizedAllConstruct(suffix, wordBank, memo);
            for(const temp of temps)
            {
                const constructed : string[] = [ word, ...temp];
                results = [...results, constructed];    
            }
        }
    }
    memo[target] = results;
    return memo[target];
}