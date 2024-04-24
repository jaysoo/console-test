import { render } from '@testing-library/react';

import Ui77 from './ui-77';

describe('Ui77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui77 />);
    expect(baseElement).toBeTruthy();
  });
});
