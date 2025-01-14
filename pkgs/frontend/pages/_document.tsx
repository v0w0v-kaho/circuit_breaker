import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='h-screen w-screen'>
      <Head />
      <body className='font-sans text-Primary10 bg-white select-none whitespace-nowrap'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}