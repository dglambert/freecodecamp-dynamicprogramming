
export function gridTraveler(numberOfRows: number, numberOfColumns: number) : number {
    if(numberOfRows == 0 || numberOfColumns == 0){
        return -1;
    }

    if(numberOfRows == 1 && numberOfColumns == 1){
        return 1;
    }

    return numberOfRows + numberOfColumns;
}

