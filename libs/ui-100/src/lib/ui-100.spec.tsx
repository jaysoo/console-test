import { render } from '@testing-library/react';

import Ui100 from './ui-100';

describe('Ui100', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui100 />);
    expect(baseElement).toBeTruthy();
  });
});
