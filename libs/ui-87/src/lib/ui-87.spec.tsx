import { render } from '@testing-library/react';

import Ui87 from './ui-87';

describe('Ui87', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui87 />);
    expect(baseElement).toBeTruthy();
  });
});
