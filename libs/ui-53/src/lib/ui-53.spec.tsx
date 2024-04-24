import { render } from '@testing-library/react';

import Ui53 from './ui-53';

describe('Ui53', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui53 />);
    expect(baseElement).toBeTruthy();
  });
});
