import { render } from '@testing-library/react';

import Ui62 from './ui-62';

describe('Ui62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui62 />);
    expect(baseElement).toBeTruthy();
  });
});
