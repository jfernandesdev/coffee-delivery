import { ShoppingCart } from 'phosphor-react'

import {
  Card,
  CardHeader,
  Tags,
  CardBody,
  CardFooter,
  Price,
  ButtonsWrapper,
  CartButton,
} from './styles'

import { CountButton } from '../CountButton'

import { NavLink } from 'react-router-dom'

interface CoffeeCardProps {
  product: {
    slug: string
    title: string
    description: string
    tags: string[]
    priceFormatted: string
    image: string
  }
}

export function CoffeeCard({ product }: CoffeeCardProps) {
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
          <CountButton />

          <NavLink to="checkout">
            <CartButton type="button" title="Adicionar no carrinho">
              <ShoppingCart weight="fill" size={22} />
            </CartButton>
          </NavLink>
        </ButtonsWrapper>
      </CardFooter>
    </Card>
  )
}
