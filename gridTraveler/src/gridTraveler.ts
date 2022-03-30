import { gridTravelable } from "./gridTravelable";
import { SimpleGridTraveler } from "./simpleGridTraveler";

export function gridTraveler(numberOfRows: number, numberOfColumns: number) : number {

    const gridTraveler: gridTravelable  = new SimpleGridTraveler();
    return gridTraveler.gridTraveler(numberOfRows, numberOfColumns);

}
