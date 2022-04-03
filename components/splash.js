import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import profilePic from '../public/copertina.jpg'
import Head from 'next/head'
import React from 'react'
import classnames from 'classnames'

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
          <section className={classnames(styles.section, styles['show--else'])}>
            <h3 className={classnames('h6')}>
              {props.date_out}
            </h3>
          </section>
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
            <div className={classnames(styles['title-wrp'])}>
              <h1 className={classnames(styles.title, 'h4')}>
                {props.album_title}
              </h1>
              <p className={classnames(styles['title_trans'], 'small')}> {props.album_title_trans} </p>
            </div>
            <p className={styles.debut}>
              {props.debut}
            </p>
            <h2 className={classnames(styles.band, 'h6')}>
              {props.band}
            </h2>
            <div className={styles.artists}>
              <h3 className={classnames(styles.artist, 'body-size')}>
                {props.artist_anna}
              </h3> -
              <h3 className={classnames(styles.artist, 'body-size')}>
                {props.artist_valentina}
              </h3>
            </div>
          </div>
          <div className={classnames(styles.section, styles['stream-buy-section'],  styles['show--else'])}>
            <div className={styles['service-list']}>
                <div>
                  {props.stream_title}
                </div>
                <ul>
                  {props.streaming_services.map((service) => (
                    <li key={service.logo}>
                      <a target="_blank" rel="noreferrer" href={service.link}>
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
                      <a target="_blank" rel="noreferrer" href={service.link}>
                        <img className={styles['service-list__icon']} src={`${service.logo}.svg`} alt={service.text}/>
                      </a>
                    </li>
                  ))
                  }
                </ul>
            </div>
          </div>
        <footer className={classnames(styles.section, styles['show--else'])}>
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
