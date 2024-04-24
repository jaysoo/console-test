import { render } from '@testing-library/react';

import Ui22 from './ui-22';

describe('Ui22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui22 />);
    expect(baseElement).toBeTruthy();
  });
});
