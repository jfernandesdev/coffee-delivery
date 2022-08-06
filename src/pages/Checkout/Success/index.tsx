import { Navigate } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustrationSuccess from '../../../assets/illustration-success.png'
import { CycleWithIcon } from '../../Home/styles'
import { ContainerSuccess, OrderWrapper, InfoOrder } from './styles'

import { NewOrderData } from '../../../context/CartContext'
import { formatPrice } from '../../../utils/formatPrice'

export function Success() {
  const order: NewOrderData | null = JSON.parse(
    `${localStorage.getItem('@CoffeeDelivery:order')}`,
  )

  if (!order) {
    return <Navigate to="/" />
  }
  return (
    <ContainerSuccess>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <OrderWrapper>
          <InfoOrder>
            <li>
              <CycleWithIcon bgColor="purple">
                <MapPin size={16} weight="fill" />
              </CycleWithIcon>
              <span>
                Entrega em{' '}
                <b>
                  {`${order?.address.street} , ${order?.address.number}`}
                  {` - ${order?.address.district}`}
                  <br />
                  {`${order?.address.cep} - ${order?.address.city} / ${order?.address.uf}`}
                </b>
              </span>
            </li>
            <li>
              <CycleWithIcon bgColor="yellow">
                <Timer size={16} weight="fill" />
              </CycleWithIcon>
              <span>
                Previsão de entrega <br /> <b>20 min - 30 min</b>
              </span>
            </li>
            <li>
              <CycleWithIcon bgColor="orange">
                <CurrencyDollar size={16} weight="fill" />
              </CycleWithIcon>
              <span>
                Pagamento na Entrega
                <br />
                <b>{`R$ ${formatPrice(
                  order?.totalItems + order?.shippingPrice,
                )} - ${order?.paymentMethod} `}</b>
              </span>
            </li>
          </InfoOrder>
        </OrderWrapper>

        <img src={illustrationSuccess} alt="" />
      </div>
    </ContainerSuccess>
  )
}
