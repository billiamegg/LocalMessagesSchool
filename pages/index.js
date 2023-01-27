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
        </p>
        <p>
          I like turtles,
        </p>
        <p>I am Him,</p>
        <p>Dollie stinks,</p>
        <p>Hey man, by: bently,</p>
        <p>eat children,</p>
        <p> hello,</p>
        <p>I 💜 Walnuts,</p>
        <p> ur ugly,</p>
        <p>Connor Wayman is him 😀,</p>
        <p>Suck,</p>
        <p>Pizza, by: hayden</p>
        <p>https://www.graphicsfuel.com/10-free-polygon-backgrounds/</p>
    
      </main>

      <Footer />
    </div>
  )
}
