import { render } from '@testing-library/react';

import Ui64 from './ui-64';

describe('Ui64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui64 />);
    expect(baseElement).toBeTruthy();
  });
});
