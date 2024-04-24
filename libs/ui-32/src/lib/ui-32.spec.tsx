import { render } from '@testing-library/react';

import Ui32 from './ui-32';

describe('Ui32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui32 />);
    expect(baseElement).toBeTruthy();
  });
});
