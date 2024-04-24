import { render } from '@testing-library/react';

import Ui65 from './ui-65';

describe('Ui65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui65 />);
    expect(baseElement).toBeTruthy();
  });
});
