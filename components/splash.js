import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import profilePic from '../public/copertina.jpg'
import Head from 'next/head'
import React from 'react'

export default function Splash(props) {
  return (
    <React.Fragment>
      <Head>
        <script type="application/ld+json">
        {`{
            "@context": "https://schema.org",
            "@type": "MusicAlbum",
            "name": "${props.album_title}",
            "byArtist": {
              "@type": "MusicGroup",
              "name": "${props.album_title}"
            }
          }`}
        </script>
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h3 className={[styles.section, styles['show--else']].join(' ')}>
            {props.date_out}
          </h3>
          <div className={styles.bgWrap}>
            <Image
              aria-hidden="true" 
              alt="cover"
              src={profilePic}
              layout='responsive'
              sizes="(min-width: 1024px) 700px, 100vw"
                quality={100}
            />
          </div>
          <div className={styles.section}>
            <h1 className={styles.title}>
              {props.album_title}
            </h1>
            <p className={styles.debut}>
              {props.debut}
            </p>
            <h2 className={styles.band}>
              {props.band}
            </h2>
            <div className={styles.artists}>
              <h3 className={styles.artist}>
                {props.artist_anna}
              </h3> -
              <h3 className={styles.artist}>
                {props.artist_valentina}
              </h3>
            </div>
          </div>
          <div className={[styles.section, styles['stream-buy-section'],  styles['show--else'] ].join(' ')}>
            <div className={styles['service-list']}>
                <div>
                  {props.stream_title}
                </div>
                <ul>
                  {props.streaming_services.map((service) => (
                    <li key={service.logo}>
                      <a href={service.link}>
                        <img className={styles['service-list__icon']} src={`${service.logo}.svg`} alt={service.text}/>
                      </a>
                    </li>
                  ))
                  }
                </ul>
            </div>
            <div className={styles['service-list']}>
                <div>
                  {props.buy_title}
                </div>
                <ul>
                  {props.buy_services.map((service) => (
                    <li key={service.logo}>
                      <a href={service.link}>
                        <img className={styles['service-list__icon']} src={`${service.logo}.svg`} alt={service.text}/>
                      </a>
                    </li>
                  ))
                  }
                </ul>
            </div>
          </div>
        <footer className={[styles.section, styles['show--else']].join(' ')}>
          <div className={styles.social}>
            <p>
              {props.find_us}
            </p>
            <ul>
              {props.social.map((site) => (
                <li key={site.link}>
                  <a href={site.link}>
                    {site.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </main>
    </React.Fragment>
  )
}
