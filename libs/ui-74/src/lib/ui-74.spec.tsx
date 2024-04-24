import { render } from '@testing-library/react';

import Ui74 from './ui-74';

describe('Ui74', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui74 />);
    expect(baseElement).toBeTruthy();
  });
});
