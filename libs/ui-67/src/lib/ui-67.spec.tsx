import { render } from '@testing-library/react';

import Ui67 from './ui-67';

describe('Ui67', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui67 />);
    expect(baseElement).toBeTruthy();
  });
});
