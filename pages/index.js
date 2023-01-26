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
          <h2 class="text">Potato Lord by: hayden</h2>
          Hi,
          I like turtles,
          I am Him,
          Dollie stinks,
          Hey man, by: bently,
          eat children,
          hello,
          I 💜 Walnuts,
          ur ugly,
          I like bals,
          Connow Wayman is him 😀,
          Suck,
          Pizza, by: hayden,
        </p>
      </main>

      <Footer />
    </div>
  )
}
