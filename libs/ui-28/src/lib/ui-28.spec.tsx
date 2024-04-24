import { render } from '@testing-library/react';

import Ui28 from './ui-28';

describe('Ui28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui28 />);
    expect(baseElement).toBeTruthy();
  });
});
