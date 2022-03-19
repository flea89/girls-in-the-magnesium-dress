import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import data from '../content/splash-album.yml'

export default function Home(context) {

  return (
    <div className={styles.container}>
      <Head>
        <title>{context.title}</title>
        <meta name="description" content={context.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          {context.title}
        </h1>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export async function getStaticProps() {

  return {
    props: data
  }
}