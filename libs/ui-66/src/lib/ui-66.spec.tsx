import { render } from '@testing-library/react';

import Ui66 from './ui-66';

describe('Ui66', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui66 />);
    expect(baseElement).toBeTruthy();
  });
});
