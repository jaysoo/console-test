import { render } from '@testing-library/react';

import Ui52 from './ui-52';

describe('Ui52', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui52 />);
    expect(baseElement).toBeTruthy();
  });
});
