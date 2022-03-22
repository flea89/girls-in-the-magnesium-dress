import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import profilePic from '../public/copertina.jpg'

export default function Splash(props) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>
          {props.date_out}
        </h2>
        <div className={styles.bgWrap}>
          <Image
            aria-hidden="true" 
            alt="cover"
            src={profilePic}
            quality={100}
          />
        </div>
        <div className={styles.section}>
          <h1 className={styles.title}>
            {props.title}
          </h1>
          <p>
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
        <div className={[styles.section, styles['stream-buy-section'] ].join(' ')}>
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
      <footer className={styles.section}>
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
  )
}
