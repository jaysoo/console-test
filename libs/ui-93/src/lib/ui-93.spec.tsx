import { render } from '@testing-library/react';

import Ui93 from './ui-93';

describe('Ui93', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui93 />);
    expect(baseElement).toBeTruthy();
  });
});
