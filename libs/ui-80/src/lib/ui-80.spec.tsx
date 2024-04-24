import { render } from '@testing-library/react';

import Ui80 from './ui-80';

describe('Ui80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui80 />);
    expect(baseElement).toBeTruthy();
  });
});
