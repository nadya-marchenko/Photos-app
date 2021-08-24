export interface PaginationConfig {
    activePage: number;
    pageNum: number;
    showedAmount: number;
    changeCurrentPage: (page: number) => void;
    changePerPageValue: (perPage: number) => void;
    handleLeftArrow: () => void;
    handleRightArrow: () => void;
}

export interface IconArrowProps {
    isDisable: boolean;
}