export interface CardProps {
  url: string;
  title: string;
  col: number;
  id: number;
  handleZoom: (id: number) => void;
  key?: number;
}

export interface CardWrapperProps {
  col: number;
}
