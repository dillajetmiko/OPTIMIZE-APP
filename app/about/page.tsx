import AboutPages from "@/pages/aboutPages"
import styles from './about.module.scss'
import { Montserrat } from "next/font/google"

// const montserrat = Montserrat({
//   weight: '700',
//   subsets: ['latin'],
//   variable: '--font-montserrat',
//   display: 'swap',
// })

// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

const about = async () => {
  // const data = await getData()

  return (
    <main className={styles.main}>
      {/* <div>
        {data.map((item: any, index: number) => {
          return (
            <div key={index}>{item.title}</div>
          )
        })}
      </div> */}
      <p className={`${styles.text}`}>
        About
      </p>
      <AboutPages />
    </main>
  )
}

export default about