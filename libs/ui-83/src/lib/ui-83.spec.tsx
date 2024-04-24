import { render } from '@testing-library/react';

import Ui83 from './ui-83';

describe('Ui83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui83 />);
    expect(baseElement).toBeTruthy();
  });
});
