import { render } from '@testing-library/react';

import Ui18 from './ui-18';

describe('Ui18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui18 />);
    expect(baseElement).toBeTruthy();
  });
});
