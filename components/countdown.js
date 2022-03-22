import styles from '../styles/Home.module.scss'

export default function CountDown(props) {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.countdown}>
          <h1 className={styles.title}>
            {props.title}
          </h1>
          <p>
            {props.desc}
          </p>

          <div className={styles.countdown__days}>
            <span>
              {props.days}
            </span> days to launch
          </div>
        </div>
      </main>
    </div>
  )
}
