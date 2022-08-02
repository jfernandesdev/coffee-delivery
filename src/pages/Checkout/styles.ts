import styled from 'styled-components'

export const FormContainer = styled.form`
  padding: 0 10%;
  display: grid;
  grid-template-columns: 1fr 448px;
  gap: 2rem;
`

export const SectionTitle = styled.h3`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.43rem;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 15px;
`

export const Wrapper = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  margin-bottom: 0.75rem;
`

const ICON_COLORS = {
  yellow: 'yellow-dark',
  purple: 'purple',
} as const

interface WrapperHeaderProps {
  colorIcon: keyof typeof ICON_COLORS
}

export const WrapperHeader = styled.div<WrapperHeaderProps>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme[ICON_COLORS[props.colorIcon]]};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.31rem;
  }

  span {
    font-size: 0.875rem;
  }
`

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .grid-33-e-1f {
    display: grid;
    grid-template-columns: 33% 1fr;
    gap: 0.75rem;
  }

  .grid-33-1fr-60px {
    display: grid;
    grid-template-columns: 33% 1fr 60px;
    gap: 0.75rem;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 2.6rem;
  padding: 0.75rem;

  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 4px;

  font-size: 0.875rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const Optional = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding-right: 4rem;
  }

  label {
    position: absolute;
    right: 0.75rem;
    color: ${(props) => props.theme['base-label']};
    font-style: italic;
    font-size: 0.75rem;
  }
`

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    height: 3.2rem;
    padding: 1rem;
    gap: 0.75rem;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    border-radius: 6px;
    border: 0;
    white-space: nowrap;
    text-transform: uppercase;

    > svg {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const InputRadio = styled.div`
  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    height: 3.2rem;
    padding: 1rem;
    gap: 0.75rem;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    border-radius: 6px;
    border: 1px solid transparent;
    white-space: nowrap;
    text-transform: uppercase;
    transition: background 0.2s color 0.2s;
    cursor: pointer;

    > svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  input[type='radio']:checked + label {
    background: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};
  }
`
