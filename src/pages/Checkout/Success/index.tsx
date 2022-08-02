import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustrationSuccess from '../../../assets/illustration-success.png'
import { CycleWithIcon } from '../../Home/styles'
import { ContainerSuccess, OrderWrapper, InfoOrder } from './styles'

export function Success() {
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
                Entrega em <b>Rua dos Bugs, 101</b> - Centro - Lavras, MG
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
                <b>Cartão de crédito</b>
              </span>
            </li>
          </InfoOrder>
        </OrderWrapper>

        <img src={illustrationSuccess} alt="" />
      </div>
    </ContainerSuccess>
  )
}
