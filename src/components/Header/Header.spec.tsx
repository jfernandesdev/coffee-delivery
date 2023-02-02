import { render, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Header } from '.'
import { useCart } from '../../hooks/useCart'

jest.mock('../../hooks/useCart', () => ({
  useCart: jest.fn().mockReturnValue({
    cart: [{ id: 'expresso-tradicional' }],
  }),
}))

describe('Header', () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it('should render the header with class navbarFixed when hasFixed props is passed', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header hasFixed={true} />
      </BrowserRouter>,
    )

    const headerContainer = getByTestId('container-nav')
    expect(headerContainer).toHaveClass('navbarFixed')
  })

  it('should render the header with logo, location and cart with one item', () => {
    const { getByTestId, getByAltText, getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    const headerContainer = getByTestId('container-nav')
    expect(headerContainer).toBeInTheDocument()

    const logo = getByAltText('Coffee Delivery')
    expect(logo).toBeInTheDocument()

    const locationTag = getByText('Lavras, MG')
    expect(locationTag).toBeInTheDocument()

    const cartButton = getByText('1')
    expect(cartButton).toBeInTheDocument()
  })

  it('should call useCart hook', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    expect(useCart).toHaveBeenCalled()
  })
})
