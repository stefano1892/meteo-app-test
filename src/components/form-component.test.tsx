import { render } from "@testing-library/react"
import FormComponent from "./form-component"
import userEvent from "@testing-library/user-event"

describe('FormComponent', () => {
    test('Submit button is disabled', () => {
        const { asFragment } = render(
            <FormComponent 
                handleInputChange={jest.fn()} 
                handleSubmit={jest.fn()}
                city=""
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('Submit button is enabled', () => {
        const { asFragment } = render(
            <FormComponent 
                handleInputChange={jest.fn()} 
                handleSubmit={jest.fn()}
                city="Milan"
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('HandleInputChange works', async () => {
        const handleInputChange = jest.fn()
        const { getByPlaceholderText } = render(
            <FormComponent 
                handleInputChange={handleInputChange}
                handleSubmit={jest.fn()}
                city="Milan"
            />
        )

        const cityToSearch = 'Milan'

        const inputElement = getByPlaceholderText('Inserisci la città...')
        await userEvent.type(inputElement, cityToSearch)
        expect(handleInputChange).toHaveBeenCalledTimes(cityToSearch.length)
    })

    test('HandleSubmit works', async () => {
        const handleSubmit = jest.fn()
        const {getByPlaceholderText, getByRole} = render(
            <FormComponent 
                handleSubmit={handleSubmit}
                handleInputChange={jest.fn()}
                city="Milan"
            />
        )
        
        const cityToSearch = 'Milan'

        const inputElement = getByPlaceholderText('Inserisci la città...')
        await userEvent.type(inputElement, cityToSearch)

        const buttonElement = getByRole('button', {name: 'Cerca'})
        await userEvent.click(buttonElement)

        expect(handleSubmit).toHaveBeenCalledTimes(1)
    })
})