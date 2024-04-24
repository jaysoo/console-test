import { render } from '@testing-library/react';

import Ui58 from './ui-58';

describe('Ui58', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui58 />);
    expect(baseElement).toBeTruthy();
  });
});
