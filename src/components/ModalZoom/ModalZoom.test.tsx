import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ModalZoom from './ModalZoom';

describe('<ModalZoom />', () => {
  const fakeLargeImg = '';
  const onClick = jest.fn();

  it('ModalZoom shows the children and a close button', async () => {
    const { getByTestId } = render(<ModalZoom largeImg={fakeLargeImg} title='Test' handleCloseModal={onClick} />);
    const modalBtn = getByTestId('modal-zoom-btn');
    const modalZoom = getByTestId('modal-zoom');

    expect(modalZoom).toBeInTheDocument();

    fireEvent.click(modalBtn); 

    expect(onClick).toHaveBeenCalledTimes(1)
  });
});
