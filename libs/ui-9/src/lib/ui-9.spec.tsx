import { render } from '@testing-library/react';

import Ui9 from './ui-9';

describe('Ui9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui9 />);
    expect(baseElement).toBeTruthy();
  });
});
