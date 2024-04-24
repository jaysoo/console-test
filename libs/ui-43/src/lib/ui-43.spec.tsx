import { render } from '@testing-library/react';

import Ui43 from './ui-43';

describe('Ui43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui43 />);
    expect(baseElement).toBeTruthy();
  });
});
