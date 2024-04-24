import { render } from '@testing-library/react';

import Ui88 from './ui-88';

describe('Ui88', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui88 />);
    expect(baseElement).toBeTruthy();
  });
});
