import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Tailwind Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="underline text-red my-2" >
          Welcome to this boilerplate
        </h1>

        <p className="text-white text-center">
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

      </main>

      <footer className={styles.footer}>
          Powered by Next and Tailwind
      </footer>
    </div>
  )
}
