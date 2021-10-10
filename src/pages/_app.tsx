import App from 'next/app'
import { Font } from '../styles/Font'
import GlobalStyle from '../styles/global'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Font />
        <GlobalStyle />
        <Component {...pageProps} />
      </>  
    )
  }
}
