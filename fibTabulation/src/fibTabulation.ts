export function fibTabulation(n: number) : number 
{
    const table: number[] = new Array<number>(n+1).fill(0);
    table[1] = 1;

    for(let i=0; i <= n; i++){
        table[i+1] += table[i];
        table[i+2] += table[i];
    }

    return table[n];
}