import { render } from '@testing-library/react';

import Ui8 from './ui-8';

describe('Ui8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui8 />);
    expect(baseElement).toBeTruthy();
  });
});
