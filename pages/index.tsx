import Head from 'next/head'
import { SITE_TITLE } from '../components/util/constants'
import { useUser } from '@auth0/nextjs-auth0'

export default function Home() {
  const { user, error, isLoading } = useUser()

  const loginLogout = user ? (
    <div>
      Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
    </div>
  ) : (
    <a href="/api/auth/login">Login</a>
  )

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <div>Hello World! This is MemoryBook</div>
      {loginLogout}
    </>
  )
}
