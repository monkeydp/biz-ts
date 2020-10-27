export default interface Where {
    column: string;
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
