import { render } from '@testing-library/react';

import Ui24 from './ui-24';

describe('Ui24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui24 />);
    expect(baseElement).toBeTruthy();
  });
});
