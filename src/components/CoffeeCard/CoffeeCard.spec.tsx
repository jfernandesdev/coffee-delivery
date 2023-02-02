import { render, fireEvent } from '@testing-library/react'
import { CoffeeCard, CoffeeCardProps } from '.'

import { useCart } from '../../hooks/useCart'

jest.mock('../../hooks/useCart', () => ({
  useCart: jest.fn().mockReturnValue({
    addProduct: jest.fn(),
  }),
}))

const mockProduct: CoffeeCardProps['product'] = {
  id: '1',
  title: 'Expresso Tradicional',
  description: 'Expresso tradicional feito na hora',
  tags: ['tradicional', 'expresso'],
  priceFormatted: '10,00',
  image: 'expresso.jpg',
}

describe('Coffee Card', () => {
  it('should render the component correctly', () => {
    const { getByTestId, getByText } = render(
      <CoffeeCard product={mockProduct} />,
    )

    expect(getByText('Expresso Tradicional')).toBeInTheDocument()
    expect(getByText('Expresso tradicional feito na hora')).toBeInTheDocument()
    expect(getByText('tradicional')).toBeInTheDocument()
    expect(getByText('expresso')).toBeInTheDocument()
    expect(getByText('10,00')).toBeInTheDocument()

    expect(getByTestId('decrement-amount')).toBeInTheDocument()
    expect(getByTestId('increment-amount')).toBeInTheDocument()
    expect(getByTestId('add-to-cart-button')).toBeInTheDocument()
    expect((getByTestId('amount-input') as HTMLInputElement).value).toBe('1')
  })

  it('should decrement the amount when clicking the decrement button', () => {
    const { getByTestId } = render(<CoffeeCard product={mockProduct} />)
    const decrementButton = getByTestId('decrement-amount')

    fireEvent.click(decrementButton)

    expect((getByTestId('amount-input') as HTMLInputElement).value).toBe('1')
  })

  it('should increment the amount when clicking the increment button', () => {
    const { getByTestId } = render(<CoffeeCard product={mockProduct} />)
    const incrementButton = getByTestId('increment-amount')

    fireEvent.click(incrementButton)

    expect((getByTestId('amount-input') as HTMLInputElement).value).toBe('2')
  })

  it('should call the addProduct hook when clicking the add to cart button', () => {
    const { getByTestId } = render(<CoffeeCard product={mockProduct} />)
    const addToCartButton = getByTestId('add-to-cart-button')

    fireEvent.click(addToCartButton)

    const { addProduct } = useCart()

    expect(addProduct).toHaveBeenCalledWith('1', 1)
  })
})
