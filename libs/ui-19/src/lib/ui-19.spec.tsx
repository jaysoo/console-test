import { render } from '@testing-library/react';

import Ui19 from './ui-19';

describe('Ui19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui19 />);
    expect(baseElement).toBeTruthy();
  });
});
