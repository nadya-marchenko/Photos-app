export interface PaginationProps {
  activePage: number;
  pageNum: number;
  showedAmount: number;
  changeCurrentPage: (page: number) => void;
  changePerPageValue: (perPage: number) => void;
  handleLeftArrow: () => void;
  handleRightArrow: () => void;
  selectFor: 'photos' | 'albums';
}

export interface IconArrowProps {
  isDisable: boolean;
}
