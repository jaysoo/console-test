import { render } from '@testing-library/react';

import Ui37 from './ui-37';

describe('Ui37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui37 />);
    expect(baseElement).toBeTruthy();
  });
});
