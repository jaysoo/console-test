import { render } from '@testing-library/react';

import Ui39 from './ui-39';

describe('Ui39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui39 />);
    expect(baseElement).toBeTruthy();
  });
});
