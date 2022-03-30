import { SimpleGridTraveler } from "./simpleGridTraveler";

export function gridTraveler(numberOfRows: number, numberOfColumns: number) : number {

    const gridTraveler: SimpleGridTraveler  = new SimpleGridTraveler();
    return gridTraveler.gridTraveler(numberOfRows, numberOfColumns);

}
