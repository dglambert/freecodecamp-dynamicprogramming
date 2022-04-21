
export function countConstruct(target: string, wordBank: string[]) : number
{
    if(target.length == 0)
    {
        return 1;
    }

    let count: number = 0;

    for(const word of wordBank)
    {
        if(target.indexOf(word) === 0)
        {
            const remaineder = target.slice(word.length);
            count = count + countConstruct(remaineder, wordBank);

        }
    }
    
    return count;
}

