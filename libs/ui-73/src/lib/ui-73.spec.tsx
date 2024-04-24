import { render } from '@testing-library/react';

import Ui73 from './ui-73';

describe('Ui73', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui73 />);
    expect(baseElement).toBeTruthy();
  });
});
