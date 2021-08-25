import React from 'react';
import { GridLayout } from './Grid.styled';
import { GridProps } from './Grid.d';

const Grid = ({ children, col }: GridProps) => (
  <GridLayout maxColumnCount={col}>
    {React.Children.toArray(children).map(
      (item) => item,
    )}
  </GridLayout>
);

export default Grid;
