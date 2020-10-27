import Condition from "./Condition";
import Sort from "./Sort";

export default interface Query {
    properties: string[];
    condition: Condition;
    sort: Sort;
}
