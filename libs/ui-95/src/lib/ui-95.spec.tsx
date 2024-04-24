import { render } from '@testing-library/react';

import Ui95 from './ui-95';

describe('Ui95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui95 />);
    expect(baseElement).toBeTruthy();
  });
});
