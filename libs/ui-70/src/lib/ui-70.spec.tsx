import { render } from '@testing-library/react';

import Ui70 from './ui-70';

describe('Ui70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui70 />);
    expect(baseElement).toBeTruthy();
  });
});
