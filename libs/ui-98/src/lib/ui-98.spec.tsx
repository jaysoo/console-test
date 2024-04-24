import { render } from '@testing-library/react';

import Ui98 from './ui-98';

describe('Ui98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui98 />);
    expect(baseElement).toBeTruthy();
  });
});
