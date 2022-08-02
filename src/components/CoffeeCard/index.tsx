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

import expresso from '../../assets/expresso.png'
import { NavLink } from 'react-router-dom'

export function CoffeeCard() {
  return (
    <Card>
      <CardHeader>
        <img src={expresso} alt="Expresso Tradicional" />
        <Tags>
          <span>Tradicional</span>
          <span>Com leite</span>
        </Tags>
      </CardHeader>

      <CardBody>
        <h6>Expresso Tradicional</h6>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CardBody>

      <CardFooter>
        <Price>
          R$ <b>9,90</b>
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
