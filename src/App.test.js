// src/App.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import {store} from './store/store';
import { Provider } from 'react-redux';

describe('App', () => {
    test('input - exists', async () => {
        const { asFragment } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot();
        });
    });
});
