import {
  ContainerHome,
  Title,
  Subtitle,
  ListFeatures,
  CycleWithIcon,
} from './styles'

import mockupHome from '../../assets/banner-intro.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
export function Home() {
  return (
    <ContainerHome>
      <div>
        <Title>
          Encontre o café perfeito <br />
          para qualquer hora do dia
        </Title>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>

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
  )
}
