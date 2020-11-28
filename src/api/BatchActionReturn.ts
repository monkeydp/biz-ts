import ValidError from "./ValidError";

export enum BatchResult {
    NO_DATA = "NO_DATA",
    SUCCESS = "SUCCESS",
    FAIL = "FAIL",
    PARTIAL_FAIL = "PARTIAL_FAIL"
}

export default interface BatchActionReturn {
    validErrorsMap: Map<unknown, Array<ValidError>>;
    successData: Array<unknown>;
    result: BatchResult;
}
