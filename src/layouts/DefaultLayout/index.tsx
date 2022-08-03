import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  const location = useLocation()

  return (
    <LayoutContainer>
      <Header hasFixed={location.pathname === '/' && true} />
      <Outlet />
    </LayoutContainer>
  )
}
