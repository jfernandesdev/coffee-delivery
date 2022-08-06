import styled from 'styled-components'

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10%;
  height: 6.5rem;
  background: ${(props) => props.theme.background};

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &.navbarFixed {
    position: fixed;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  @media (max-width: 768px) {
    height: 5rem;
    padding: 2rem 5%;
  }
`

export const LocationTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
  line-height: 1.125rem;
  border-radius: 6px;
  padding: 0.5rem;
  height: 2.37rem;
  cursor: default;
`

export const CartButton = styled.button`
  position: relative;
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;

  cursor: pointer;
  transition: background 0.2s color 0.2s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  > span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 50%;
    font-weight: 700;
    font-size: 0.75rem;
    text-align: center;
    top: -0.5rem;
    right: -0.53rem;
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
