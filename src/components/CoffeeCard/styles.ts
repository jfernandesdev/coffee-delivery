import styled from 'styled-components'

export const Card = styled.div`
  height: 310px;
  min-width: 256px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 20px;
  margin: auto;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  img {
    margin-top: -20px;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 4px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.625rem;
    text-transform: uppercase;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CardBody = styled.div`
  text-align: center;
  margin-top: 1rem;

  h6 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.6rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.87rem;
    line-height: 1.1rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 33px;
`

export const Price = styled.span`
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: ${(props) => props.theme['base-text']};
  white-space: nowrap;

  b {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.31rem;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CartButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  padding: 0.5rem;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  border: 0;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`

export const WrapperCountButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 4.5rem;
  height: 2.38rem;
  padding: 0.5rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    width: 5rem;
    height: 2rem;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${(props) => props.theme.purple};
    transition: color 0.2s;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  input {
    width: 20px;
    height: 21px;
    color: ${(props) => props.theme['base-title']};
    background: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    -moz-appearance: textfield;
    appearance: textfield;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`
