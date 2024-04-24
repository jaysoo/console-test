import { render } from '@testing-library/react';

import Ui46 from './ui-46';

describe('Ui46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui46 />);
    expect(baseElement).toBeTruthy();
  });
});
