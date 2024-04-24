import { render } from '@testing-library/react';

import Ui25 from './ui-25';

describe('Ui25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui25 />);
    expect(baseElement).toBeTruthy();
  });
});
