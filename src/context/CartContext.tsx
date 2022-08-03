import { createContext, ReactNode, useState } from 'react'
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

export interface CartContextData {
  cart: Product[]
  addProduct: (productId: string) => Promise<void>
  removeProduct: (productId: string) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  async function addProduct(productId: string) {
    try {
      const updatedCart = [...cart]
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      const currentAmount = productExists ? productExists.amount : 0
      const amount = currentAmount + 1

      if (productExists) {
        productExists.amount = amount
      } else {
        const product = await api.get(`/products/${productId}`)

        const newProduct = {
          ...product.data,
          amount: 1,
        }

        updatedCart.push(newProduct)
      }

      setCart(updatedCart)
    } catch {
      console.log('Erro na adição do produto')
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
      } else {
        throw Error()
      }
    } catch {
      console.log('Erro na remoção do produto')
    }
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}