import Head from 'next/head'
import { SITE_TITLE } from '../components/util/constants'

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <div>Hello World! This is MemoryBook</div>
    </>
  )
}
