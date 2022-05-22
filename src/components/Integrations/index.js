import * as React from "react"
import * as styles from "./index.module.scss"

const Integration = () => (
  <section className={styles.integration}>
    <h2>Integrations.</h2>
    <div className={styles.gameCardBox}>
      <div className={styles.gameCard}>
        <div className={styles.gameCover} />
        <div className={styles.gameLogo} />
        <div>
          <h3>Rebel Bots</h3>
          <p>🏹 Battle ✨ Collect ⟠ Earn // Axie creates economic freedom for gamers.</p>
        </div>
      </div>
      <div className={styles.gameCard}>
        <div className={styles.gameCover} />
        <div className={styles.gameLogo} />
        <div>
          <h3>Pegaxy</h3>
          <p>Pegaxy is a TRUE Play to Earn mech-horse racing game built on the Polygon Network.</p>
        </div>
      </div>
      <div className={styles.gameCard}>
        <div className={styles.gameUpcoming} />
        {/* <div className={styles.gameLogo} /> */}
        <div>
          <h3 className={styles.upcoming}>Upcoming...</h3>
          <p>More great games are upcoming...</p>
        </div>
      </div>
    </div>
  </section>
)

export default Integration
