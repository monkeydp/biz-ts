export const DEFAULT_CURRENT_PAGE = 1
export const DEFAULT_PAGE_SIZE = 10

export default class Paging<T> {
    currentPage = DEFAULT_CURRENT_PAGE
    pageSize = DEFAULT_PAGE_SIZE
    total = 0
    pageCount = 0
    rows = 0
    content: Array<T> = []
}

export interface PagingQueryForm {
    currentPage: number;
    pageSize: number;
}

export abstract class BasePqForm implements PagingQueryForm {
    currentPage = DEFAULT_CURRENT_PAGE
    pageSize = DEFAULT_PAGE_SIZE

    resetCurrentPage(): void {
        this.currentPage = DEFAULT_CURRENT_PAGE
    }
}

export class DefPqForm extends BasePqForm {
}
