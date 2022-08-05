import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatPrice'

import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormCheckout } from '../../components/FormCheckout'

import {
  FormContainer,
  SectionTitle,
  CoffeeSelectedWrapper,
  CoffeeSelectedItem,
  TotalOrder,
  RemoveButton,
  ListCart,
} from './styles'

import { WrapperCountButton } from '../../components/CoffeeCard/styles'

import { Minus, Plus, Trash } from 'phosphor-react'

interface Product {
  id: string
  title: string
  price: number
  image: string
  amount: number
}

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP para entrega'),
  street: zod.string().min(1, 'Informe a rua para entrega'),
  number: zod.string().min(1, 'Informe o número para entrega'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro para entrega'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().length(2, 'O UF precisa ter 2 caracteres'),
  paymentMethod: zod.string(),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

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

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
      paymentMethod: 'Cartão de Crédito',
    },
  })

  const { handleSubmit, watch, reset } = newOrderForm
  watch('paymentMethod')

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log(JSON.stringify(data))
    reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      <FormProvider {...newOrderForm}>
        <FormCheckout />
      </FormProvider>

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

                        <input type="text" readOnly value={item.amount} />

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
