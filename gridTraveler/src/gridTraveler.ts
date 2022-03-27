
export function gridTraveler(numberOfRows: number, numberOfColumns: number) : number {
    
    let numberOfPaths = 0;
    
    if(numberOfRows == 0 || numberOfColumns == 0){
        return -1;
    }

    if(numberOfRows == 1 && numberOfColumns == 1){
        return 1;
    }

    if(numberOfRows > 1)
    {
        numberOfPaths = numberOfPaths = gridTraveler(numberOfRows -1, numberOfColumns);
    }

    if(numberOfColumns > 1)
    {
        numberOfPaths = numberOfPaths + gridTraveler(numberOfRows, numberOfColumns-1);
    }

    return numberOfPaths;
}

