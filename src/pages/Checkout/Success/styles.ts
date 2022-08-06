import styled from 'styled-components'

export const ContainerSuccess = styled.div`
  padding: 4rem 10%;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 6.3rem;
    margin-top: 2.5rem;
  }
`

export const InfoOrder = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    z-index: 2;

    span {
      line-height: 1.3rem;
      /* max-width: 60%; */
    }
  }
`

export const OrderWrapper = styled.div`
  position: relative;
  padding: 2.5rem;

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%)
      border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    border-radius: 6px 36px;
  }
`
