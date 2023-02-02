import { ContainerNav, LocationTag, CartButton } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

interface HeaderProps {
  hasFixed?: boolean
}

export function Header({ hasFixed = false }: HeaderProps) {
  const { cart } = useCart()

  return (
    <ContainerNav
      className={hasFixed ? 'navbarFixed' : ''}
      data-testid="container-nav"
    >
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
            <span>{cart ? cart.length : '0'}</span>
          </CartButton>
        </NavLink>
      </div>
    </ContainerNav>
  )
}
