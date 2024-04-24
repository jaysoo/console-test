import { render } from '@testing-library/react';

import Ui11 from './ui-11';

describe('Ui11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui11 />);
    expect(baseElement).toBeTruthy();
  });
});
