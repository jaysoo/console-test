import { render } from '@testing-library/react';

import Ui31 from './ui-31';

describe('Ui31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui31 />);
    expect(baseElement).toBeTruthy();
  });
});
