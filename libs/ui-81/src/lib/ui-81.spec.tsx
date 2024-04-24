import { render } from '@testing-library/react';

import Ui81 from './ui-81';

describe('Ui81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui81 />);
    expect(baseElement).toBeTruthy();
  });
});
