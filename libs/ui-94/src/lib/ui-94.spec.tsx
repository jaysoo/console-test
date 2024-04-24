import { render } from '@testing-library/react';

import Ui94 from './ui-94';

describe('Ui94', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui94 />);
    expect(baseElement).toBeTruthy();
  });
});
