import { render } from '@testing-library/react';

import Ui60 from './ui-60';

describe('Ui60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui60 />);
    expect(baseElement).toBeTruthy();
  });
});
