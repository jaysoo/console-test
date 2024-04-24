import { render } from '@testing-library/react';

import Ui57 from './ui-57';

describe('Ui57', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui57 />);
    expect(baseElement).toBeTruthy();
  });
});
