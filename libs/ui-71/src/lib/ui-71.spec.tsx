import { render } from '@testing-library/react';

import Ui71 from './ui-71';

describe('Ui71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui71 />);
    expect(baseElement).toBeTruthy();
  });
});
