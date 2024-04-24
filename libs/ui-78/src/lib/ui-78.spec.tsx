import { render } from '@testing-library/react';

import Ui78 from './ui-78';

describe('Ui78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui78 />);
    expect(baseElement).toBeTruthy();
  });
});
