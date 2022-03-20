import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { getPageCopy } from './utils/getPageCopy'

export default function Ruutsu(context) {

  return (
    <div className={styles.container}>
      <Head>
        <title>{context.title}</title>
        <meta name="description" content={context.desc} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/static/images/hero.jpg" />
        <meta property="og:title" content={context.meta.title} />
        <meta name="description" content={context.meta.desc} itemprop="description" />
        <meta property="og:description" content={context.meta.desc} />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          {context.title} - {context.locale}
        </h1>
        <p>
        {context.desc}
        </p>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      locale,
      ...await getPageCopy('splashAlbum', locale)
    }
  }
}
