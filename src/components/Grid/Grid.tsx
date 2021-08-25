import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import { GridLayout } from './Grid.styled';
import { GridProps } from './Grid.d';

const Grid = ({ children, col }: GridProps) => (
  <GridLayout maxColumnCount={col}>
    {React.Children.toArray(children).map(
      (item: ReactChild | ReactFragment | ReactPortal) => item,
    )}
  </GridLayout>
);

export default Grid;
