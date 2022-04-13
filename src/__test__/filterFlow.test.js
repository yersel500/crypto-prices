import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

describe('Testing search bar and click to details page', () => {
  test('Testing search bar and click to details page', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const searchbar = await screen.findByPlaceholderText('Search by currency');
    userEvent.type(searchbar, 'tether');
    const currency = await screen.findByText('USDT');
    userEvent.click(currency);
    const currencyDetails = await screen.findByText('Currency:tether');
    await waitFor(() => expect(currencyDetails.classList.contains('title-currency')).toBeTruthy());
  });
});
