import Head from 'next/head'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>bloge ziba</title>
        <link rel="icon" href="/bz-logo.png" />
      </Head>
    <Nav />
    </main>
  )
}
