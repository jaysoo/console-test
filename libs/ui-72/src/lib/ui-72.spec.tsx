import { render } from '@testing-library/react';

import Ui72 from './ui-72';

describe('Ui72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui72 />);
    expect(baseElement).toBeTruthy();
  });
});
