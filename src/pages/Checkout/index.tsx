import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { WrapperCountButton } from '../../components/CoffeeCard/styles'

import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatPrice'

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
  CoffeeSelectedWrapper,
  CoffeeSelectedItem,
  TotalOrder,
  RemoveButton,
  ListCart,
} from './styles'

interface Product {
  id: string
  title: string
  price: number
  image: string
  amount: number
}

export function Checkout() {
  const { cart, removeProduct, updateProductAmount } = useCart()
  const shippingPrice = cart.length > 0 ? 3.5 : 0
  const formattedShippingPrice = formatPrice(shippingPrice)

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  }))

  function handleRemoveProduct(productId: string) {
    removeProduct(productId)
  }

  function handleProductIncrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount + 1,
    })
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount - 1,
    })
  }

  const calculateTotalItems = cart.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.amount
  }, 0)

  const totalItemsFormatted = formatPrice(calculateTotalItems)
  const totalWithShippingFormatted = formatPrice(
    calculateTotalItems + shippingPrice,
  )

  return (
    <FormContainer action="checkout/success">
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

        <CoffeeSelectedWrapper>
          <ListCart>
            {cartFormatted.map((item) => (
              <CoffeeSelectedItem key={item.id}>
                <div>
                  <img src={item.image} alt={item.title} />

                  <div className="infoOrder">
                    <span className="productName">{item.title}</span>
                    <div className="btnActions">
                      <WrapperCountButton>
                        <button
                          type="button"
                          onClick={() => handleProductDecrement(item)}
                        >
                          <Minus size={14} weight="bold" />
                        </button>

                        <input
                          type="number"
                          min={1}
                          max={10}
                          readOnly
                          value={item.amount}
                        />

                        <button
                          type="button"
                          onClick={() => handleProductIncrement(item)}
                        >
                          <Plus size={14} weight="bold" />
                        </button>
                      </WrapperCountButton>

                      <RemoveButton
                        type="button"
                        onClick={() => handleRemoveProduct(item.id)}
                      >
                        <Trash size={16} /> REMOVER
                      </RemoveButton>
                    </div>
                  </div>
                </div>

                <span className="price">R$ {item.subTotal}</span>
              </CoffeeSelectedItem>
            ))}
          </ListCart>

          <TotalOrder>
            <div>
              <span>Total de itens</span>
              <span>R$ {totalItemsFormatted}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ {formattedShippingPrice}</span>
            </div>

            <div className="total">
              <span>Total</span>
              <span>R$ {totalWithShippingFormatted}</span>
            </div>
          </TotalOrder>

          <button type="submit">Confirmar Pedido</button>
        </CoffeeSelectedWrapper>
      </div>
    </FormContainer>
  )
}
