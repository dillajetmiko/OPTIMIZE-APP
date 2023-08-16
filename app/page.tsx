import Image from 'next/image'
import styles from './page.module.scss'
import img from "./bg.webp";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas culpa, hic nulla eaque vitae tempore asperiores, recusandae iste veniam commodi quas nobis! Molestiae qui quis doloribus libero natus nam.</div>
        </div>
      </main>
    </>
  )
}
