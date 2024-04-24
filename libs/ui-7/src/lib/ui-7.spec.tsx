import { render } from '@testing-library/react';

import Ui7 from './ui-7';

describe('Ui7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui7 />);
    expect(baseElement).toBeTruthy();
  });
});
