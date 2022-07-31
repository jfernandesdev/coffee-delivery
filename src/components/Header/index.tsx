import { ContainerNav, LocationTag, CartButton } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  return (
    <ContainerNav>
      <img src={logoCoffeeDelivery} alt="Coffee Delivery" />

      <div>
        <LocationTag>
          <MapPin weight="fill" size={22} /> Lavras, MG
        </LocationTag>

        <CartButton type="button">
          <ShoppingCart weight="fill" size={22} />
          <span>3</span>
        </CartButton>
      </div>
    </ContainerNav>
  )
}
