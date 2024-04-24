import { render } from '@testing-library/react';

import Ui96 from './ui-96';

describe('Ui96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui96 />);
    expect(baseElement).toBeTruthy();
  });
});
