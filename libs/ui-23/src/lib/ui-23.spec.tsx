import { render } from '@testing-library/react';

import Ui23 from './ui-23';

describe('Ui23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui23 />);
    expect(baseElement).toBeTruthy();
  });
});
