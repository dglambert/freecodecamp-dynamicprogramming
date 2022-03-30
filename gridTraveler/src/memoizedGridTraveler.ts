import { gridTravelable } from "./gridTravelable";
import { IHash } from "./IHash";

export class MemoizedGridTraveler implements gridTravelable {
    
    private readonly gridTravelable: gridTravelable;
    private memo: IHash = {};


    constructor(gridTravelable: gridTravelable) {
        this.gridTravelable = gridTravelable;
    }

    gridTraveler(numberOfRows: number, numberOfColumns: number): number {
        const memoKey = numberOfRows + ',' + numberOfColumns;
        
        if(memoKey in this.memo)
        {
            return this.memo[memoKey];
        }

        this.memo[memoKey] = this.gridTravelable.gridTraveler(numberOfRows, numberOfColumns);
        return this.memo[memoKey];
    }

}