import { render } from '@testing-library/react';

import Ui75 from './ui-75';

describe('Ui75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui75 />);
    expect(baseElement).toBeTruthy();
  });
});
