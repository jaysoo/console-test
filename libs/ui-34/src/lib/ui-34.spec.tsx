import { render } from '@testing-library/react';

import Ui34 from './ui-34';

describe('Ui34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui34 />);
    expect(baseElement).toBeTruthy();
  });
});
