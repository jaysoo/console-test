import { render } from '@testing-library/react';

import Ui91 from './ui-91';

describe('Ui91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui91 />);
    expect(baseElement).toBeTruthy();
  });
});
