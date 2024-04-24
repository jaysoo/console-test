import { render } from '@testing-library/react';

import Ui38 from './ui-38';

describe('Ui38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui38 />);
    expect(baseElement).toBeTruthy();
  });
});
