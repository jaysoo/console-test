import { render } from '@testing-library/react';

import Ui27 from './ui-27';

describe('Ui27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui27 />);
    expect(baseElement).toBeTruthy();
  });
});
