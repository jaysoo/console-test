import { render } from '@testing-library/react';

import Ui4 from './ui-4';

describe('Ui4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui4 />);
    expect(baseElement).toBeTruthy();
  });
});
