import { render } from '@testing-library/react';

import Ui36 from './ui-36';

describe('Ui36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui36 />);
    expect(baseElement).toBeTruthy();
  });
});
