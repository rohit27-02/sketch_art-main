/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */

import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {


  static async getInitialProps(ctx) {
   
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="//fonts.googleapis.com/css2?family=Lato:wght@700&family=Montserrat:wght@300&family=Poppins:wght@500&family=Fjalla+One&family=Roboto+Slab:wght@300&family=Playfair+Display&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css"/>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <body id='main'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument