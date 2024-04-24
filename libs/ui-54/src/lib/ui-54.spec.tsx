import { render } from '@testing-library/react';

import Ui54 from './ui-54';

describe('Ui54', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui54 />);
    expect(baseElement).toBeTruthy();
  });
});
