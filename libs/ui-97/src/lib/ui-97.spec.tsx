import { render } from '@testing-library/react';

import Ui97 from './ui-97';

describe('Ui97', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui97 />);
    expect(baseElement).toBeTruthy();
  });
});
