import { render } from '@testing-library/react';

import Ui42 from './ui-42';

describe('Ui42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui42 />);
    expect(baseElement).toBeTruthy();
  });
});
