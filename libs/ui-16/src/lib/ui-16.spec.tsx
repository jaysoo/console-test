import { render } from '@testing-library/react';

import Ui16 from './ui-16';

describe('Ui16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui16 />);
    expect(baseElement).toBeTruthy();
  });
});
