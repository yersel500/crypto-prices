import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

describe('Testing a complete flow', () => {
  test('Testing filter, go to details page and come back to home page', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const searchbar = await screen.findByPlaceholderText('Search by currency');
    userEvent.type(searchbar, 'solana');
    const currency = await screen.findByText('SOL');
    userEvent.click(currency);
    const backHome = await screen.findByTitle('back');
    userEvent.click(backHome);
    const allCurrencies = await screen.findAllByTitle('arrow-detail');
    await waitFor(() => expect(allCurrencies.length).toBe(100));
  });
});
