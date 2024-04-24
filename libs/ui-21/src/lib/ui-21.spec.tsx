import { render } from '@testing-library/react';

import Ui21 from './ui-21';

describe('Ui21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui21 />);
    expect(baseElement).toBeTruthy();
  });
});
