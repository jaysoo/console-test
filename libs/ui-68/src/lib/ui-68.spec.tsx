import { render } from '@testing-library/react';

import Ui68 from './ui-68';

describe('Ui68', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui68 />);
    expect(baseElement).toBeTruthy();
  });
});
