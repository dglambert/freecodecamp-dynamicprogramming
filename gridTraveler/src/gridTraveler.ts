import { Coordinate } from "./coordinate";

export function gridTraveler(numberOfRows: number, numberOfColumns: number) : number {
        
    if(numberOfRows == 0 || numberOfColumns == 0){
        return 0;
    }

    if(numberOfRows == 1 && numberOfColumns == 1){
        return 1;
    }

    const movingDownCoordinate = moveTravelerDown(numberOfRows, numberOfColumns);
    const movingRightCoordinate = moveTravelerRight(numberOfRows, numberOfColumns);
    
    return gridTraveler(movingDownCoordinate.row, movingDownCoordinate.column) + gridTraveler(movingRightCoordinate.row, movingRightCoordinate.column);
}

function moveTravelerDown(row: number, column: number) : Coordinate {
    return new Coordinate(row -1, column);
}

function moveTravelerRight(row: number, column: number) : Coordinate {
    return new Coordinate(row, column-1);
}
