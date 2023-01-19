import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import TravelForm from forms/userinput.js

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <TravelForm />
      </main>

      <Footer />
    </div>
  )
}
