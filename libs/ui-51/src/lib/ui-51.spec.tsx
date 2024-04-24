import { render } from '@testing-library/react';

import Ui51 from './ui-51';

describe('Ui51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui51 />);
    expect(baseElement).toBeTruthy();
  });
});
