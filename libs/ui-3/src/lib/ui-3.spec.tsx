import { render } from '@testing-library/react';

import Ui3 from './ui-3';

describe('Ui3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui3 />);
    expect(baseElement).toBeTruthy();
  });
});
