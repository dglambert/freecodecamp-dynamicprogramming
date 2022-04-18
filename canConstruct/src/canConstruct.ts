
export function canConstruct(target: string, wordBank: string[]) : boolean
{
    if(target.length == 0)
    {
        return true;
    }

    for(const word of wordBank)
    {
        if(target.indexOf(word) > -1)
        {
            target = target.replace(word, "");
            return canConstruct(target, wordBank);
        }
    }
    return false;
}

