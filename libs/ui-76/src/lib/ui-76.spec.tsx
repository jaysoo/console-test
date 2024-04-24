import { render } from '@testing-library/react';

import Ui76 from './ui-76';

describe('Ui76', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui76 />);
    expect(baseElement).toBeTruthy();
  });
});
