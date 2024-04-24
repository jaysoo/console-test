import { render } from '@testing-library/react';

import Ui82 from './ui-82';

describe('Ui82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui82 />);
    expect(baseElement).toBeTruthy();
  });
});
