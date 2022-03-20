import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { getPageCopy } from '../utils/getPageCopy'
import Image from 'next/image'
import profilePic from '../public/copertina.jpg'
import Countdown from '../components/countdown'
import Splash from '../components/splash'

export default function Ruutsu(context) {
  const oneDay = 24 * 60 * 60 * 1000;
  const ruutsuLaunch = new Date(2022, 3, 24);
  const diffDays = Math.round(Math.abs((ruutsuLaunch - new Date()) / oneDay));

  return (
    <div>
      <Head>
        <title>{context.meta.title}</title>
        <meta name="description" content={context.desc} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/static/images/hero.jpg" />
        <meta property="og:title" content={context.meta.title} />
        <meta name="description" content={context.meta.desc} itemProp="description" />
        <meta property="og:description" content={context.meta.desc} />
      </Head>

        { diffDays < 0 ? 
          <Splash {...context} /> : <Countdown title={context.title} days={diffDays}></Countdown>
          }
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
