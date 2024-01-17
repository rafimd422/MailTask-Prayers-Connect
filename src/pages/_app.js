import Header from '@/components/Header'
import '@/styles/globals.css'
import theme from '@/theme'
import { ThemeProvider } from '@mui/material'
import { useState } from 'react'


export default function App({ Component, pageProps }) {

const [searchValue,setSearchValue] = useState(null)

  return (
    <ThemeProvider theme={theme}>
      <Header setSearchValue={setSearchValue} />
      <Component searchValue={searchValue} {...pageProps} />
    </ThemeProvider>
  )
}
