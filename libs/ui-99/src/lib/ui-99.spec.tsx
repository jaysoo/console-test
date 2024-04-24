import { render } from '@testing-library/react';

import Ui99 from './ui-99';

describe('Ui99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui99 />);
    expect(baseElement).toBeTruthy();
  });
});
