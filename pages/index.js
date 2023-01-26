import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hi Big Ben!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi Big Ben!!" />
        <p className="description">
          <p class="text">Potato Lord by: hayden</p>
        </p>
      </main>

      <Footer />
    </div>
  )
}
