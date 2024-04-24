import { render } from '@testing-library/react';

import Ui47 from './ui-47';

describe('Ui47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui47 />);
    expect(baseElement).toBeTruthy();
  });
});
