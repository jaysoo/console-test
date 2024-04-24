import { render } from '@testing-library/react';

import Ui6 from './ui-6';

describe('Ui6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui6 />);
    expect(baseElement).toBeTruthy();
  });
});
