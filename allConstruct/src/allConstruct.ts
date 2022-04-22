
export function allConstruct(target: string, wordBank: string[]) : string[][]
{
    if(target.length == 0)
    {
        return [[]];
    }

    const results: string[][] = [[]];

    for(let word of wordBank)
    {
        if(target.indexOf(word) == 0)
        {
            const suffix = target.slice(word.length);
            const temp: string[][] = allConstruct(suffix, wordBank);
            let constructed : string[] = [...temp[0], target];
            results[0] = constructed;
        }

    }
    return results;    
}

