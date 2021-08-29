export interface PaginationElementProps {
  page: number;
  isActive: boolean;
  handlePageNum: (page: number) => void;
}

export interface ElementWrapperProps {
  isActive: boolean;
}

export interface PaginationElementDisplayProps {
  'data-testid'?: string;
}
