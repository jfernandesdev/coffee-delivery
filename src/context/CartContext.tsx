import { createContext, ReactNode, useState, useRef, useEffect } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

interface Product {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
  amount: number
}

interface UpdateProductAmount {
  productId: string
  amount: number
}

interface CartProviderProps {
  children: ReactNode
}

export interface NewOrderData {
  id: string
  address: {
    cep: string
    street: string
    number: string
    complement?: string
    district: string
    city: string
    uf: string
  }
  paymentMethod: string
  orderedItems: {
    idProduct: string
    nameProduct: string
    price: number
    amount: number
  }[]
  totalItems: number
  shippingPrice: number
  orderDate: Date
}

export interface CartContextData {
  cart: Product[]
  addProduct: (productId: string, amount: number) => Promise<void>
  removeProduct: (productId: string) => void
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
  addNewOrder: (data: NewOrderData) => void
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const storageCart = localStorage.getItem('@CoffeeDelivery:cart')

    if (storageCart) {
      return JSON.parse(storageCart)
    }

    return []
  })

  const prevCartRef = useRef<Product[]>()

  useEffect(() => {
    prevCartRef.current = cart
  })

  const cartPreviousValue = prevCartRef.current ?? cart

  useEffect(() => {
    if (cartPreviousValue !== cart) {
      localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(cart))
    }
  }, [cart, cartPreviousValue])

  async function addProduct(productId: string, amount: number) {
    try {
      const updatedCart = [...cart]
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      if (productExists) {
        productExists.amount = amount
      } else {
        const product = await api.get(`/products/${productId}`)

        const newProduct = {
          ...product.data,
          amount,
        }

        updatedCart.push(newProduct)
      }

      setCart(updatedCart)
      toast.success('Produto adicionado no carrinho!')
    } catch {
      toast.error('Erro na adição do produto. Tente novamente!')
    }
  }

  function removeProduct(productId: string) {
    try {
      const updatedCart = [...cart]
      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId,
      )

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1)
        setCart(updatedCart)
        toast.info('Item removido do carrinho!')
      } else {
        throw Error()
      }
    } catch {
      toast.error('Erro na remoção do produto. Tente novamente!')
    }
  }

  function updateProductAmount({ productId, amount }: UpdateProductAmount) {
    try {
      if (amount <= 0 || amount > 10) {
        return
      }

      const updatedCart = [...cart]
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      if (productExists) {
        productExists.amount = amount
        setCart(updatedCart)
      } else {
        throw Error()
      }
    } catch {
      toast.error(
        'Erro na alteração da quantidade do produto. Tente novamente!',
      )
    }
  }

  function addNewOrder(data: NewOrderData) {
    localStorage.setItem('@CoffeeDelivery:order', JSON.stringify(data))
    localStorage.removeItem('@CoffeeDelivery:cart')
    window.location.href = '/checkout/success'
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updateProductAmount,
        addNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
