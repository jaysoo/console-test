import { render } from '@testing-library/react';

import Ui15 from './ui-15';

describe('Ui15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui15 />);
    expect(baseElement).toBeTruthy();
  });
});
