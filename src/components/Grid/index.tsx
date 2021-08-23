import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import { GridLayout } from './Grid.styled';
import { GridConfig } from './Grid';

const Grid = ({ children, col }: GridConfig) => (
  <GridLayout maxColumnCount={col}>
    {React.Children.toArray(children).map(
      (item: ReactChild | ReactFragment | ReactPortal) => item,
    )}
  </GridLayout>
);

export default Grid;
