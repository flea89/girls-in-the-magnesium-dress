import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import profilePic from '../public/copertina.jpg'

export default function Splash(props) {
  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          aria-hidden="true" 
          alt="cover"
          src={profilePic}
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
      <div className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            {props.title}
          </h1>
        </main>
      </div>
    </div>
  )
}
