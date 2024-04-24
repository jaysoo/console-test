import { render } from '@testing-library/react';

import Ui49 from './ui-49';

describe('Ui49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui49 />);
    expect(baseElement).toBeTruthy();
  });
});
