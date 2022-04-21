
export function countConstruct(target: string, wordBank: string[]) : number
{
    return countConstructBruteForce(target, wordBank);
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
