import { render } from '@testing-library/react';

import Ui79 from './ui-79';

describe('Ui79', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui79 />);
    expect(baseElement).toBeTruthy();
  });
});
