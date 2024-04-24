import { render } from '@testing-library/react';

import Ui63 from './ui-63';

describe('Ui63', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui63 />);
    expect(baseElement).toBeTruthy();
  });
});
