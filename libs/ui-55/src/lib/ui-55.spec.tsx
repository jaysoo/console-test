import { render } from '@testing-library/react';

import Ui55 from './ui-55';

describe('Ui55', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui55 />);
    expect(baseElement).toBeTruthy();
  });
});
