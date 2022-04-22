
export function allConstruct(target: string, wordBank: string[]) : string[][] | null
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
            const temp: string[][] | null = allConstruct(suffix, wordBank);
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

