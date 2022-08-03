import { createContext, ReactNode, useContext, useState } from 'react'
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

interface CartContextData {
  cart: Product[]
  addProduct: (productId: string) => Promise<void>
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  const addProduct = async (productId: string) => {
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

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
