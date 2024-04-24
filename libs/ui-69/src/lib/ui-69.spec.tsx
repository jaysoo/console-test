import { render } from '@testing-library/react';

import Ui69 from './ui-69';

describe('Ui69', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui69 />);
    expect(baseElement).toBeTruthy();
  });
});
