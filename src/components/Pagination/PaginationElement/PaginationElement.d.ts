export interface PaginationElementProps {
  page: number;
  isActive: boolean;
  handlePageNum(page: number): any;
}

export interface ElementWrapperProps {
  isActive: boolean;
}

export interface PaginationElementDisplayProps {
  'data-testid'?: string;
}
