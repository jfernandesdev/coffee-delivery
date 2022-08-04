import { useState, ChangeEvent } from 'react'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'

import {
  Card,
  CardHeader,
  Tags,
  CardBody,
  CardFooter,
  Price,
  ButtonsWrapper,
  CartButton,
  WrapperCountButton,
} from './styles'

import { useCart } from '../../hooks/useCart'

interface CoffeeCardProps {
  product: {
    id: string
    title: string
    description: string
    tags: string[]
    priceFormatted: string
    image: string
  }
}

export function CoffeeCard({ product }: CoffeeCardProps) {
  const { addProduct } = useCart()

  const [amount, setAmount] = useState(1)

  function onDecrementAmount() {
    amount - 1 > 0 && setAmount(amount - 1)
  }

  function onIncrementAmount() {
    amount + 1 <= 10 && setAmount(amount + 1)
  }

  function handleChangeCount(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.valueAsNumber > 0 && event.target.valueAsNumber <= 10) {
      setAmount(event.target.valueAsNumber)
    }
  }

  function handleAddProduct(id: string, amount: number) {
    addProduct(id, amount)
  }

  return (
    <Card>
      <CardHeader>
        <img src={product.image} alt="Expresso Tradicional" />
        <Tags>
          {product.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Tags>
      </CardHeader>

      <CardBody>
        <h6>{product.title}</h6>
        <p>{product.description}</p>
      </CardBody>

      <CardFooter>
        <Price>
          R$ <b>{product.priceFormatted}</b>
        </Price>

        <ButtonsWrapper>
          <WrapperCountButton>
            <button type="button" onClick={onDecrementAmount}>
              <Minus size={14} weight="bold" />
            </button>

            <input
              type="number"
              min={1}
              max={10}
              onChange={handleChangeCount}
              value={amount}
            />

            <button type="button" onClick={onIncrementAmount}>
              <Plus size={14} weight="bold" />
            </button>
          </WrapperCountButton>

          <CartButton
            type="button"
            title="Adicionar no carrinho"
            onClick={() => handleAddProduct(product.id, amount)}
          >
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </ButtonsWrapper>
      </CardFooter>
    </Card>
  )
}
