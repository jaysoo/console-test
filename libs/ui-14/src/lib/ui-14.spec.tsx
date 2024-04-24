import { render } from '@testing-library/react';

import Ui14 from './ui-14';

describe('Ui14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui14 />);
    expect(baseElement).toBeTruthy();
  });
});
