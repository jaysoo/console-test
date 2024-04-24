import { render } from '@testing-library/react';

import Ui5 from './ui-5';

describe('Ui5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui5 />);
    expect(baseElement).toBeTruthy();
  });
});
