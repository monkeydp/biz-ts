import Where from "./Where";
import Sort from "./Sort";

export default interface Query {
    columns: Array<string>;
    wheres: Array<Where>;
    sorts: Array<Sort>;
}
