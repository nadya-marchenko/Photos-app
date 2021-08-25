import React from 'react';
import { render, waitFor } from '@testing-library/react';
import WithLoading from './WithLoading';

describe('<WithLoading />', () => {
  const FakeComponent = () => <div>Test</div>;

  it('isLoading shows', () => {
    const ComponentWithLoading = WithLoading(FakeComponent);
    const { getByTestId } = render(<ComponentWithLoading isLoading={true} />);

    const loadingSection = getByTestId('loading');

    expect(loadingSection).toBeInTheDocument();
  });

  it('isLoading hides', async () => {
    const ComponentWithLoading = WithLoading(FakeComponent);
    const { queryByText } = render(<ComponentWithLoading isLoading={false} />);

    await waitFor(() => {
      expect(queryByText('Test')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(queryByText('Loading')).not.toBeInTheDocument();
    });
  });
});
