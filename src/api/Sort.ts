export default interface Sort {
    column: string;
    direction: Direction;
}

export enum Direction {
    ASC = "ASC",
    DESC = "DESC",
}
