import { render } from '@testing-library/react';

import Ui92 from './ui-92';

describe('Ui92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui92 />);
    expect(baseElement).toBeTruthy();
  });
});
