
export function gridTraveler(numberOfRows: number, numberOfColumns: number) : number {
    if(numberOfRows == 0 || numberOfColumns == 0){
        return -1;
    }
    return numberOfRows + numberOfColumns;
}

