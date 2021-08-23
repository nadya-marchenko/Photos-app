export interface PaginationElementConfig {
  page: number;
  isActive: boolean;
  handlePageNum(page: number): any;
}

export interface ElementWrapperProps {
  isActive: boolean;
}
