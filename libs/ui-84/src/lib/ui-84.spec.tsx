import { render } from '@testing-library/react';

import Ui84 from './ui-84';

describe('Ui84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui84 />);
    expect(baseElement).toBeTruthy();
  });
});
