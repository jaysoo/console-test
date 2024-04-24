import { render } from '@testing-library/react';

import Ui48 from './ui-48';

describe('Ui48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui48 />);
    expect(baseElement).toBeTruthy();
  });
});
