import { useFormContext } from 'react-hook-form'
import { getAddressByCEP } from 'cep-address-finder'
import InputMask from 'react-input-mask'
import { toast } from 'react-toastify'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MagnifyingGlass,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  SectionTitle,
  Wrapper,
  WrapperHeader,
  WrapperBody,
  Input,
  InputGroup,
  Optional,
  PaymentMethods,
  InputRadio,
} from './styles'

export function FormCheckout() {
  const { register, formState, setValue, getValues, setFocus } =
    useFormContext()
  const { errors } = formState

  async function handleAddressAutocomplete() {
    const cepInput = getValues('cep')

    if (cepInput.length >= 8) {
      try {
        const address = await getAddressByCEP(cepInput)

        setValue('street', address.street)
        setValue('complement', address.complement)
        setValue('district', address.neighborhood)
        setValue('city', address.city)
        setValue('uf', address.state)
      } catch (err) {
        toast.error(`${err}`)
      }
    } else {
      toast.error('CEP deve conter exatamente 8 números.')
      setFocus('cep')
    }
  }

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
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="CEP"
                    as={InputMask}
                    mask="99.999-999"
                    {...register('cep')}
                    className={errors.cep ? 'error' : ''}
                  />
                  <button type="button" onClick={handleAddressAutocomplete}>
                    <MagnifyingGlass size={18} weight="bold" />
                  </button>
                </InputGroup>
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
