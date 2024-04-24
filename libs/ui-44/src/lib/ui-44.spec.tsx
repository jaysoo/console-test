import { render } from '@testing-library/react';

import Ui44 from './ui-44';

describe('Ui44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui44 />);
    expect(baseElement).toBeTruthy();
  });
});
