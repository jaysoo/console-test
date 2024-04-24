import { render } from '@testing-library/react';

import Ui90 from './ui-90';

describe('Ui90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui90 />);
    expect(baseElement).toBeTruthy();
  });
});
