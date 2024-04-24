import { render } from '@testing-library/react';

import Ui50 from './ui-50';

describe('Ui50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui50 />);
    expect(baseElement).toBeTruthy();
  });
});
