'use client'
import ArkCarousel from '@/components/Carousel';
import styles from './about.module.scss'

interface IAboutPage {
  data: any;
}
export default function AboutPages({ data }: Partial<IAboutPage>) {
  console.log({ data });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={styles.main}>
      <div>
        <ol>
          {data.map((item: any) => {
            return (
              <li>{item.title}</li>
            )
          })}
        </ol>
      </div>
      <div className={styles.container}>
        <ArkCarousel
          rounded
          variableWidth
          focusOnSelect
          slidesToScroll={1}
          trackingId={{ btnNextPrev: "gk_panah_okupasi" }}
        // responsive={responsiveSlider}
        >
          <div className={styles.konten}>
            <h3>1 ada</h3>
          </div>
          <div className={styles.konten}>
            <h3>2 llll</h3>
          </div>
          <div className={styles.konten}>
            <h3>3 reuuw</h3>
          </div>
          <div className={styles.konten}>
            <h3>4</h3>
          </div>
          <div className={styles.konten}>
            <h3>5</h3>
          </div>
          <div className={styles.konten}>
            <h3>6</h3>
          </div>
        </ArkCarousel>
      </div>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
