import { render } from '@testing-library/react';

import Ui41 from './ui-41';

describe('Ui41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui41 />);
    expect(baseElement).toBeTruthy();
  });
});
