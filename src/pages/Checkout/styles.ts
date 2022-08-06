import styled from 'styled-components'

export const FormContainer = styled.form`
  padding: 0 10%;
  display: grid;
  grid-template-columns: 1fr 448px;
  gap: 2rem;

  button[type='submit'] {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    height: 2.875rem;
    border: 0;
    border-radius: 6px;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-stretch: 100;
    transition: background 0.2s color 0.2s;
    cursor: pointer;

    &:not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`

export const SectionTitle = styled.h3`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.43rem;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 15px;
`

export const CoffeeSelectedWrapper = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CoffeeSelectedItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem 0.25rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  > div {
    display: flex;
    gap: 1.25rem;
  }

  img {
    width: 64px;
    height: 64px;
  }

  .price {
    font-weight: 700;
  }

  .productName {
    color: ${(props) => props.theme['base-subtitle']};
  }

  .infoOrder {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div.btnActions {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      padding: 0;

      > div {
        display: flex;
        gap: 0.5rem;
      }
    }
  }

  .btnActions {
    button,
    div {
      height: 2rem;
    }
  }
`
export const TotalOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;

    span:nth-child(1) {
      font-size: 0.875rem;
    }

    span:nth-child(2) {
      font-size: 1rem;
    }
  }

  div.total {
    span {
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 1.6rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  text-transform: uppercase;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  padding: 0px 0.5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s color 0.2s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};

    > svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  > svg {
    color: ${(props) => props.theme.purple};
  }
`

export const ListCart = styled.div`
  overflow-y: scroll;
  max-height: 250px;
  margin-right: -0.5rem;
`
