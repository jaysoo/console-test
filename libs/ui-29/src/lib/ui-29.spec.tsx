import { render } from '@testing-library/react';

import Ui29 from './ui-29';

describe('Ui29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui29 />);
    expect(baseElement).toBeTruthy();
  });
});
