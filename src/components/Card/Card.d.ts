export interface CardConfig {
  url: string;
  title: string;
  col: number;
  id: number;
  handleZoom: (id: number) => any;
  key?: number;
}

export interface CardWrapperProps {
  col: number;
}
