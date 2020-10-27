export default interface Sort {
    orders: Order[];
}

export class SortBuilder {
    static build(...orders: Order[]): Sort {
        return {
            orders: orders
        }
    }
}

export interface Order {
    property: string;
    direction: Direction;
}

export enum Direction {
    ASC = "ASC",
    DESC = "DESC",
}

export class BaseOrder implements Order {
    property!: string
    direction!: Direction
}

export class Asc extends BaseOrder {
    property!: string;
    readonly direction = Direction.ASC
}

export class Desc extends BaseOrder {
    property!: string;
    readonly direction = Direction.DESC
}
