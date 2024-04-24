import { render } from '@testing-library/react';

import Ui59 from './ui-59';

describe('Ui59', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui59 />);
    expect(baseElement).toBeTruthy();
  });
});
