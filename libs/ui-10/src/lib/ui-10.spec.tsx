import { render } from '@testing-library/react';

import Ui10 from './ui-10';

describe('Ui10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui10 />);
    expect(baseElement).toBeTruthy();
  });
});
