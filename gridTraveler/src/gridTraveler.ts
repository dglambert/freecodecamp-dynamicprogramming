
export function gridTraveler(numberOfRows: number, numberOfColumns: number) : number {
    
    let numberOfPaths = 0;
    
    if(numberOfRows == 0 || numberOfColumns == 0){
        return 0;
    }

    if(numberOfRows == 1 && numberOfColumns == 1){
        return 1;
    }

    if(numberOfRows > 1)
    {
        const coordinate = moveTravelerDown(numberOfRows, numberOfColumns);
        numberOfPaths = numberOfPaths = gridTraveler(coordinate.row, coordinate.column);
    }

    if(numberOfColumns > 1)
    {
        const coordinate = moveTravelerRight(numberOfRows, numberOfColumns);
        numberOfPaths = numberOfPaths + gridTraveler(coordinate.row, coordinate.column);
    }

    return numberOfPaths;
}

function moveTravelerDown(row: number, column: number) : Coordinate {
    return new Coordinate(row -1, column);
}

function moveTravelerRight(row: number, column: number) : Coordinate {
    return new Coordinate(row, column-1);
}

class Coordinate {
    row: number;
    column: number;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column; 
        
    }
    
}
