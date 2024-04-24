import { render } from '@testing-library/react';

import Ui86 from './ui-86';

describe('Ui86', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui86 />);
    expect(baseElement).toBeTruthy();
  });
});
