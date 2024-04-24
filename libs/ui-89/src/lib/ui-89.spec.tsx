import { render } from '@testing-library/react';

import Ui89 from './ui-89';

describe('Ui89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui89 />);
    expect(baseElement).toBeTruthy();
  });
});
