import { render } from '@testing-library/react';

import Ui33 from './ui-33';

describe('Ui33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui33 />);
    expect(baseElement).toBeTruthy();
  });
});
