import { render } from '@testing-library/react';

import Ui30 from './ui-30';

describe('Ui30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui30 />);
    expect(baseElement).toBeTruthy();
  });
});
