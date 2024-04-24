import { render } from '@testing-library/react';

import Ui12 from './ui-12';

describe('Ui12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui12 />);
    expect(baseElement).toBeTruthy();
  });
});
