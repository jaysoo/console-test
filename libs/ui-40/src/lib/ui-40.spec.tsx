import { render } from '@testing-library/react';

import Ui40 from './ui-40';

describe('Ui40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui40 />);
    expect(baseElement).toBeTruthy();
  });
});
