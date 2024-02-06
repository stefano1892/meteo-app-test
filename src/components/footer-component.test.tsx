import React from "react"
import FooterComponent from "./footer-component"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../store/store"

describe('FooterComponent', () => {
    test('Snap Footer', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <FooterComponent />
            </Provider>
        )

        expect(asFragment()).toMatchSnapshot();
    })
})