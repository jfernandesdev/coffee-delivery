import { useFormContext } from 'react-hook-form'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  SectionTitle,
  Wrapper,
  WrapperHeader,
  WrapperBody,
  Input,
  Optional,
  PaymentMethods,
  InputRadio,
} from './styles'

export function FormCheckout() {
  const { register, formState } = useFormContext()
  const { errors } = formState

  return (
    <>
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
                <Input
                  type="text"
                  placeholder="CEP"
                  {...register('cep')}
                  className={errors.cep ? 'error' : ''}
                />
              </div>

              <Input
                type="text"
                placeholder="Rua"
                {...register('street')}
                className={errors.street ? 'error' : ''}
              />

              <div className="grid-33-e-1f">
                <Input
                  type="text"
                  placeholder="Número"
                  {...register('number')}
                  className={errors.number ? 'error' : ''}
                />

                <Optional>
                  <Input
                    type="text"
                    id="complemento"
                    {...register('complement')}
                    placeholder="Complemento"
                  />
                  <label htmlFor="complemento">Opcional</label>
                </Optional>
              </div>

              <div className="grid-33-1fr-60px">
                <Input
                  type="text"
                  placeholder="Bairro"
                  {...register('district')}
                  className={errors.district ? 'error' : ''}
                />
                <Input
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                  className={errors.city ? 'error' : ''}
                />
                <Input
                  type="text"
                  placeholder="UF"
                  minLength={2}
                  maxLength={2}
                  {...register('uf')}
                  className={errors.uf ? 'error' : ''}
                />
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
                  {...register('paymentMethod')}
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
                  {...register('paymentMethod')}
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
                  {...register('paymentMethod')}
                />
                <label htmlFor="dinheiro">
                  <Money size={16} /> Dinheiro
                </label>
              </InputRadio>
            </PaymentMethods>
          </Wrapper>
        </div>
      </div>
    </>
  )
}
