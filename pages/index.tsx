import Head from 'next/head'
// import { Inter } from 'next/font/google'
import Layout from '@/components/app/Layout'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        Start
      </main>
    </Layout>
  )
}
