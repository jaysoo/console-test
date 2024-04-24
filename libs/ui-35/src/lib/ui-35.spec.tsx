import { render } from '@testing-library/react';

import Ui35 from './ui-35';

describe('Ui35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui35 />);
    expect(baseElement).toBeTruthy();
  });
});
