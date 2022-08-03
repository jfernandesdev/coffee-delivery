import { useState, useEffect } from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { api } from '../../services/api'
import { formatPrice } from '../../utils/formatPrice'
import { CoffeeCard } from '../../components/CoffeeCard'

import {
  ContainerHome,
  Title,
  Text,
  ListFeatures,
  CycleWithIcon,
  ContainerProducts,
  Subtitle,
  ListProducts,
} from './styles'

import mockupHome from '../../assets/banner-intro.png'

interface Product {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface ProductFormatted extends Product {
  priceFormatted: string
}

export function Home() {
  const [products, setProducts] = useState<ProductFormatted[]>([])

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>('/products')

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))
      setProducts(data)
    }

    loadProducts()
  }, [])

  return (
    <>
      <ContainerHome>
        <div>
          <Title>
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </Title>
          <Text>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Text>

          <ListFeatures>
            <li>
              <CycleWithIcon bgColor="orange">
                <ShoppingCart size={16} weight="fill" />
              </CycleWithIcon>
              Compra simples e segura
            </li>
            <li>
              {' '}
              <CycleWithIcon bgColor="gray">
                <Package size={16} weight="fill" />
              </CycleWithIcon>
              Embalagem mantém o café intacto
            </li>
            <li>
              <CycleWithIcon bgColor="yellow">
                <Timer size={16} weight="fill" />
              </CycleWithIcon>
              Entrega rápida e rastreada
            </li>
            <li>
              <CycleWithIcon bgColor="purple">
                <Coffee size={16} weight="fill" />
              </CycleWithIcon>
              O café chega fresquinho até você
            </li>
          </ListFeatures>
        </div>

        <img
          src={mockupHome}
          alt="Um copo branco de café com tampa preta, sobre fundo amarelo com as folhas de uma árvore de café e vários cafés em grãos e moído"
        />
      </ContainerHome>

      <ContainerProducts>
        <Subtitle>Nossos cafés</Subtitle>

        <ListProducts>
          {products.map((product) => (
            <CoffeeCard product={product} key={product.id} />
          ))}
        </ListProducts>
      </ContainerProducts>
    </>
  )
}
