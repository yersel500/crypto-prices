import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Header from '../components/Header';
import Currencies from '../pages/Currencies';

describe('Testing Components', () => {
  test('Render Header', () => {
    const header = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(header).toMatchSnapshot();
  });

  test('Render Currencies Section', () => {
    const currencies = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Currencies />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(currencies).toMatchSnapshot();
  });
});
