import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ToastContainer } from 'react-toastify'

import { CartProvider } from './context/CartContext'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
          <GlobalStyle />
          <ToastContainer
            autoClose={2000}
            theme="light"
            position="bottom-right"
          />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
