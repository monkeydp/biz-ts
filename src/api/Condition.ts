export default interface Condition {
    wheres: Where[];
}

export class ConditionBuilder {
    static build(...wheres: Where[]): Condition {
        return {
            wheres: wheres
        }
    }
}

export interface Where {
    property: string;
    operator: Operator;
    value: string;
}

export enum Operator {
    EQ = "EQ",      // Equal to
    GT = "GT",      // Greater than
    LT = "LT",      // Less than
    GTE = "GET",    // Greater than or equal to
    LTE = "LET",    // Less than or equal to
}
