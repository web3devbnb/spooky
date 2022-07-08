import * as React from "react"
import * as styles from "./index.module.scss"

const GameList = [
  {
    name: "Metashooter",
    desc: "MetaShooter is the first decentralized blockchain-based hunting metaverse.",
    cover: "https://tva1.sinaimg.cn/large/e6c9d24egy1h3xf7n8uflj21o10u07g0.jpg",
    logo: "https://tva1.sinaimg.cn/large/e6c9d24egy1h3yiseo4pej206o06o747.jpg",
    website: "https://metashooter.gg",
  },
  {
    name: "X-metaverse",
    desc: "A Star Wars game based on NFT+ blockchain exploration, mining, trading and battle.",
    cover: "https://tva1.sinaimg.cn/large/e6c9d24egy1h3xg3lydilj20lz0cfq5n.jpg",
    logo: "https://tva1.sinaimg.cn/large/e6c9d24egy1h3yioiithuj202i02gjr8.jpg",
    website: "https://www.x-metaverse.org/#/",
  },

  {
    name: "Evo Surfers",
    desc: "Evo Surfers is a fantasy-based metaverse world themed around the evolution of civilizations.",
    cover: "https://tva1.sinaimg.cn/large/e6c9d24egy1h3xgox0udlj20b4069q3k.jpg",
    logo: "https://tva1.sinaimg.cn/large/e6c9d24egy1h3xgbpx62bj20hs0hsdgj.jpg",
    website: "https://www.evosurfers.com/",
  },
  {
    name: "Conquest Legends",
    desc: "Conquest Legends is the first AI-powered NFT idle battle arena game built on BSC.",
    cover: "https://tva1.sinaimg.cn/large/e6c9d24egy1h3xgnbyzscj20zk0k0gtn.jpg",
    logo: "https://tva1.sinaimg.cn/large/e6c9d24egy1h3xgector4j210i0u0aho.jpg",
    website: "https://conquestlegends.com/",
  },
  {
    name: "BreederDao",
    desc: "BreederDAO is the NFT asset factory of blockchain games.",
    cover: "https://tva1.sinaimg.cn/large/e6c9d24egy1h3xgxjlpc6j20qy0f6aaw.jpg",
    logo: "https://tva1.sinaimg.cn/large/e6c9d24egy1h3xgysa1u4j20b40b4t8r.jpg",
    website: "https://www.breederdao.io",
  },
  {
    name: "Game Space",
    desc: "The first GameFi as a Service released in the market",
    cover: "https://tva1.sinaimg.cn/large/e6c9d24egy1h3xhds6ikrj20zo0ibtcv.jpg",
    logo: "https://tva1.sinaimg.cn/large/e6c9d24egy1h3yilqgoj7j202e02edfm.jpg",
    website: "https://game.space",
  },
]

const Integration = () => (
  <section className={styles.integration}>
    <h2>Integrations.</h2>
    <div className={styles.gameCardBox}>
      {GameList.map(item => (
        <a href={item.website} rel="noreferrer" target="_blank">
          <div className={styles.gameCard}>
            <div className={styles.gameCover}>
              <img src={item.cover} alt={`${item.name}_Cover`} />
            </div>
            <div className={styles.gameLogo}>
              <img src={item.logo} alt={`${item.name}_Logo`} />
            </div>
            <div className={styles.gameInfo}>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
)

export default Integration
