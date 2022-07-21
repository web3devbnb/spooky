import * as React from "react"
import { Link } from "gatsby"
import Games from "../../images/banner_game.png"
import * as styles from "./index.module.scss"

const rentType = ["Lands", "Heroes", "Shoes"]

const TopBanner = () => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1)
    }, 4000)

    return () => clearInterval(interval)
  }, [index])

  const showType = React.useMemo(() => {
    return rentType[index % 3]
  }, [index])

  return (
    <section className={styles.topBanner}>
      <div>
        <h2>
          Rent {index % 3 === 0 && <span>Lands</span>}
          {index % 3 === 1 && <span>Heroes</span>}
          {index % 3 === 2 && <span>Shoes</span>}
        </h2>
        <p>
          An open-source NFTs rental protocol built to maximize the utility of
          NFTs
        </p>
        <a href="https://app.rentero.io" rel="noreferrer">
          <span className={styles.bannerEntry}>Enter APP</span>
        </a>
      </div>
      <img src={Games} alt="Game_Example" />
    </section>
  )
}

export default TopBanner
