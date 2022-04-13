import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

describe('Testing search bar', () => {
  test('Testing search bar', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const searchbar = await screen.findByPlaceholderText('Search by currency');
    userEvent.type(searchbar, 'ethereum');
    const currency = await screen.findByText('ETH');
    await waitFor(() => expect(currency.classList.contains('symbol')).toBeTruthy());
  });
});

describe('Testing click on the card currency', () => {
  test('Testing click on the card currency', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const cardCurrency = await screen.findAllByTitle('arrow-detail');
    userEvent.click(cardCurrency[0]);
    const titleCurrency = await screen.findByText('Symbol:');
    await waitFor(() => expect(titleCurrency.classList.contains('symbol-currency')).toBeTruthy());
  });
});
