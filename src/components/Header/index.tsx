import { ContainerNav, LocationTag, CartButton } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <ContainerNav>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="Coffee Delivery" />
      </NavLink>

      <div>
        <LocationTag>
          <MapPin weight="fill" size={22} /> Lavras, MG
        </LocationTag>

        <NavLink to="checkout">
          <CartButton type="button">
            <ShoppingCart weight="fill" size={22} />
            <span>3</span>
          </CartButton>
        </NavLink>
      </div>
    </ContainerNav>
  )
}
