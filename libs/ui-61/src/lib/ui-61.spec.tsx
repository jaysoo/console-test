import { render } from '@testing-library/react';

import Ui61 from './ui-61';

describe('Ui61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui61 />);
    expect(baseElement).toBeTruthy();
  });
});
