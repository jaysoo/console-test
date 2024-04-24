import { render } from '@testing-library/react';

import Ui85 from './ui-85';

describe('Ui85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui85 />);
    expect(baseElement).toBeTruthy();
  });
});
