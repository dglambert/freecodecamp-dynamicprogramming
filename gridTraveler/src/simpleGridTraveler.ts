import { Coordinate } from "./coordinate";
import { gridTravelable } from "./gridTravelable";

export class SimpleGridTraveler implements gridTravelable{
    
    gridTraveler(numberOfRows: number, numberOfColumns: number) : number {
        
        if(numberOfRows == 0 || numberOfColumns == 0){
            return 0;
        }
    
        if(numberOfRows == 1 && numberOfColumns == 1){
            return 1;
        }
    
        const movingDownCoordinate = this.moveTravelerDown(numberOfRows, numberOfColumns);
        const movingRightCoordinate = this.moveTravelerRight(numberOfRows, numberOfColumns);
        
        return this.gridTraveler(movingDownCoordinate.row, movingDownCoordinate.column) + this.gridTraveler(movingRightCoordinate.row, movingRightCoordinate.column);
    }
    
    private moveTravelerDown(row: number, column: number) : Coordinate {
        return new Coordinate(row -1, column);
    }
    
    private moveTravelerRight(row: number, column: number) : Coordinate {
        return new Coordinate(row, column-1);
    }
}

