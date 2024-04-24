import { render } from '@testing-library/react';

import Ui56 from './ui-56';

describe('Ui56', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui56 />);
    expect(baseElement).toBeTruthy();
  });
});
