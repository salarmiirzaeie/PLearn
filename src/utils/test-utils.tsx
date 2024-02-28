import MainProvider from '../providers/main-provider';
import renderer from 'react-test-renderer';

export function renderWithProviders(children: React.ReactElement) {
  const wrapper = renderer.create(<MainProvider>{children}</MainProvider>);
  return wrapper;
}
