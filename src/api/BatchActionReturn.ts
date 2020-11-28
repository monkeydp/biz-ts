import ValidError from "./ValidError";

export default interface BatchActionReturn {
    validErrorsMap: Map<unknown, Array<ValidError>>;
    successData: Array<unknown>;
}
