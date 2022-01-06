import { ElementType } from 'react';
import { Provider } from 'react-redux';
import { Home } from './pages/home/Home';
import { store } from './store/configureStore';
import './global-styles/index.scss';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
