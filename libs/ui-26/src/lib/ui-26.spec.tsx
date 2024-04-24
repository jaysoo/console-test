import { render } from '@testing-library/react';

import Ui26 from './ui-26';

describe('Ui26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui26 />);
    expect(baseElement).toBeTruthy();
  });
});
