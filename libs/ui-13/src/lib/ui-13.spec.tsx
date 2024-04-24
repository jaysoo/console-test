import { render } from '@testing-library/react';

import Ui13 from './ui-13';

describe('Ui13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui13 />);
    expect(baseElement).toBeTruthy();
  });
});
