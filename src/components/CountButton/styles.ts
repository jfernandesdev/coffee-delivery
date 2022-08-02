import styled from 'styled-components'

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
