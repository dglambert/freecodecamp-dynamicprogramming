
export function allConstruct(target: string, wordBank: string[]) : string[][] | null
{
    return bruteForceAllConstruct(target, wordBank);    
}

// m = target length
// n = wordBank length
// time: O((n^m)*m^3)
// space: O(m^4)
function bruteForceAllConstruct(target: string, wordBank: string[]) : string[][] | null
{
    if(target.length == 0)
    {
        return [[]];
    }

    let results: string[][] | null = null;

    for(const word of wordBank)
    {
        if(target.indexOf(word) == 0)
        {
            const suffix = target.slice(word.length);
            const temp: string[][] | null = bruteForceAllConstruct(suffix, wordBank);
            if(temp !== null)
            {
                const constructed : string[] = [ word, ...temp[0]];
                if(results == null)
                {
                    results = [];
                }
                results = [...results, constructed];    
            }
        }
    }
    return results;
}
