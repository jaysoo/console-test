import { render } from '@testing-library/react';

import Ui17 from './ui-17';

describe('Ui17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui17 />);
    expect(baseElement).toBeTruthy();
  });
});
