
export function countConstruct(target: string, wordBank: string[]) : number
{
    if(target.length == 0)
    {
        return 0;
    }
    return wordBank.length + target.length;
}

