import Image from 'next/image'
import styles from './page.module.scss'
import img from "../app/assets/bg.webp";
import { Roboto, Montserrat } from 'next/font/google'
import dynamic from 'next/dynamic';
import LazyLoadedIframe from './lazyLoadIframe';
// import Konten from './konten';
const Konten = dynamic(() => import("./konten"));

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.atas}>
            <Image
              src={img}
              className={styles.image}
              alt="Picture of the author"
              priority
            />
            <LazyLoadedIframe />

          </div>

          <h1 className={styles.title}>Title</h1>

          <div className={`${styles.content}`}>saa Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas culpa, hic nulla eaque vitae tempore asperiores, recusandae iste veniam commodi quas nobis! Molestiae qui quis doloribus libero natus nam.</div>
        </div>
      </main>
    </>
  )
}
