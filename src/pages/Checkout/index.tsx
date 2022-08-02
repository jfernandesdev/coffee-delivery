import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

import expresso from '../../assets/expresso.png'
import { CountButton } from '../../components/CountButton'

import {
  FormContainer,
  SectionTitle,
  Wrapper,
  WrapperHeader,
  WrapperBody,
  Input,
  Optional,
  PaymentMethods,
  InputRadio,
} from './styles'

export function Checkout() {
  return (
    <FormContainer>
      <div>
        <SectionTitle>Complete seu pedido</SectionTitle>
        <div>
          <Wrapper>
            <WrapperHeader colorIcon="yellow">
              <MapPinLine size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </WrapperHeader>

            <WrapperBody>
              <div className="grid-33-e-1f">
                <Input type="text" placeholder="CEP" />
              </div>

              <Input type="text" placeholder="Rua" />

              <div className="grid-33-e-1f">
                <Input type="text" placeholder="Número" />

                <Optional>
                  <Input
                    type="text"
                    id="complemento"
                    placeholder="Complemento"
                  />
                  <label htmlFor="complemento">Opcional</label>
                </Optional>
              </div>

              <div className="grid-33-1fr-60px">
                <Input type="text" placeholder="Bairro" />
                <Input type="text" placeholder="Cidade" />
                <Input type="text" placeholder="UF" />
              </div>
            </WrapperBody>
          </Wrapper>

          <Wrapper>
            <WrapperHeader colorIcon="purple">
              <CurrencyDollar size={22} />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </WrapperHeader>

            <PaymentMethods>
              <InputRadio>
                <input
                  type="radio"
                  id="cartao-credito"
                  value="Cartão de Crédito"
                  name="paymentMethods"
                />
                <label htmlFor="cartao-credito">
                  <CreditCard size={16} />
                  Cartão de Crédito
                </label>
              </InputRadio>

              <InputRadio>
                <input
                  type="radio"
                  id="cartao-debito"
                  value="Cartão de Débito"
                  name="paymentMethods"
                />
                <label htmlFor="cartao-debito">
                  <Bank size={16} /> Cartão de Débito
                </label>
              </InputRadio>

              <InputRadio>
                <input
                  type="radio"
                  id="dinheiro"
                  value="Dinheiro"
                  name="paymentMethods"
                />
                <label htmlFor="dinheiro">
                  <Money size={16} /> Dinheiro
                </label>
              </InputRadio>
            </PaymentMethods>
          </Wrapper>
        </div>
      </div>

      <div>
        <SectionTitle>Cafés selecionado</SectionTitle>
        <div>
          <img src={expresso} alt="" />
          <span>Expresso Tradicional</span>
          <CountButton />
          <button>
            <Trash /> REMOVER
          </button>
          <span>R$ 9,90</span>

          <hr />

          <div>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </div>

          <button>Confirmar Pedido</button>
        </div>
      </div>
    </FormContainer>
  )
}
