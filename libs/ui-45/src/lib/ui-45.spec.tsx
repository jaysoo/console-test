import { render } from '@testing-library/react';

import Ui45 from './ui-45';

describe('Ui45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui45 />);
    expect(baseElement).toBeTruthy();
  });
});
