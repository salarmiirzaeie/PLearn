import MainProvider from '../providers/main-provider';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

export function renderWithProviders(children: React.ReactElement) {
  const wrapper = renderer.create(<MainProvider>{children}</MainProvider>);
  return wrapper;
}
export function rendersWithProviders(children: React.ReactElement) {
  const wrapper = render(<MainProvider>{children}</MainProvider>);
  return wrapper;
}
