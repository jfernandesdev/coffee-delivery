import styled from 'styled-components'

import backgroundHomeIntro from '../../assets/background-home-intro.svg'

export const ContainerHome = styled.div`
  background: url(${backgroundHomeIntro});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: calc(100vh - 6.5rem);

  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  justify-content: center;

  padding: 5.75rem 10%;

  > img {
    width: 476px;
    height: 360px;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 8% 5%;
    height: auto;

    > img {
      width: 100%;
      height: auto;
    }
  }
`

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.8rem;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.1em;
    line-height: 2.5rem;

    > br {
      display: none;
    }
  }
`

export const Text = styled.h4`
  font-size: 1.19rem;
  line-height: 1.62rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: 400;
  font-stretch: 100;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const ListFeatures = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 0;
  margin-top: 5rem;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    line-height: 1.32rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`
const CYCLE_COLORS = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface CycleWithIconProps {
  bgColor: keyof typeof CYCLE_COLORS
}

export const CycleWithIcon = styled.span<CycleWithIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${(props) => props.theme[CYCLE_COLORS[props.bgColor]]};
  color: ${(props) => props.theme.background};
`

export const ContainerProducts = styled.div`
  padding: 0 10%;
`

export const Subtitle = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.6rem;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 3.3rem;
`

export const ListProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
  margin-bottom: 6.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }
`
