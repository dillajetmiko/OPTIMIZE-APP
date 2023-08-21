
import ArkCarousel from '@/components/Carousel';
import styles from './about.module.scss'

export default function AboutPages() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <main className={styles.main}>
      <h2> Single Item</h2>
      <ArkCarousel
        rounded
        variableWidth
        focusOnSelect
        slidesToScroll={1}
        trackingId={{ btnNextPrev: "gk_panah_okupasi" }}
      // responsive={responsiveSlider}
      >
        <div className={styles.konten}>
          <h3>1</h3>
        </div>
        <div className={styles.konten}>
          <h3>2</h3>
        </div>
        <div className={styles.konten}>
          <h3>3</h3>
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
    </main>
  )
}