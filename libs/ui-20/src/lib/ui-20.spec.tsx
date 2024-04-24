import { render } from '@testing-library/react';

import Ui20 from './ui-20';

describe('Ui20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui20 />);
    expect(baseElement).toBeTruthy();
  });
});
