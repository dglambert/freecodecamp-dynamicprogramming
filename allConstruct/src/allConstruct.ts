
export function allConstruct(target: string, wordBank: string[]) : string[][] | null
{
    if(target.length == 0)
    {
        return [[]];
    }

    let results: string[][] | null = null;

    for(let word of wordBank)
    {
        if(target.indexOf(word) == 0)
        {
            const suffix = target.slice(word.length);
            const temp: string[][] | null = allConstruct(suffix, wordBank);
            if(temp !== null)
            {
                let constructed : string[] = [...temp[0], target];
                if(results == null)
                {
                    results = [[]];
                }
                results[0] = constructed;    
            }
        }

    }
    return results;    
}

