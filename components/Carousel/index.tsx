import { IcNext, IcNextRound, IcPrev, IcPrevRound } from "../assets";
import Image from "next/image";
import { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ArkCarousel = ({
  // komponent child / dalam bentuk loop
  children,

  // options slick
  slideToShow = 1,
  slidesToScroll = 1,
  isDots = false, // titik pagination
  infinite = false, // loop
  variableWidth = false, // container menyesuaikan lebar child
  focusOnSelect = false, // pindah tab ketika klik, not required
  responsive, // responsive per breake point, not required

  // option button arrow
  rounded = false,
  btnType = "base",
  trackingId = { btnNextPrev: "" },
}: IArkCarousel) => {
  function BaseNextArrow(props: any) {
    const { onClick, className, style } = props;
    return (
      <div
        id={trackingId?.btnNextPrev}
        onClick={onClick}
        className={className}
        style={{ width: "35px", height: "35px" }}
      >
        <Image
          id={trackingId?.btnNextPrev}
          src={rounded ? IcNextRound : IcNext}
          alt="ic-next"
          loading="lazy"
        />
      </div>
    );
  }
  function BasePrevArrow(props: any) {
    const { onClick, className, style } = props;
    return (
      <div
        id={trackingId?.btnNextPrev}
        onClick={onClick}
        className={className}
        style={{ width: "35px", height: "35px" }}
      >
        <Image
          id={trackingId?.btnNextPrev}
          src={rounded ? IcPrevRound : IcPrev}
          alt="ic-prev"
          loading="lazy"
        />
      </div>
    );
  }

  function getNextPrevBtn() {
    switch (btnType) {
      case "base":
        return { next: <BaseNextArrow />, prev: <BasePrevArrow /> };
    }
  }
  const settings = {
    dots: isDots,
    infinite: infinite,
    speed: 200,
    slidesToShow: slideToShow,
    slidesToScroll: slidesToScroll,
    nextArrow: getNextPrevBtn()?.next,
    prevArrow: getNextPrevBtn()?.prev,
    focusOnSelect: focusOnSelect,
    variableWidth: variableWidth,
    responsive: responsive,
  };
  return <Slider {...settings}>{children}</Slider>;
};

interface IArkCarousel {
  children: ReactNode;
  isDots?: boolean;
  infinite?: boolean;
  slideToShow?: number;
  variableWidth?: boolean;
  rounded?: boolean;
  focusOnSelect?: boolean;
  slidesToScroll?: number;
  responsive?: any;
  trackingId?: { btnNextPrev: string };
  btnType?: "base" | "no bg";
}

// breakpoint example
// const responsiveSlider = [
//   {
//     breakpoint: 2560,
//     settings: {
//       slidesToShow: 10,
//       slidesToScroll: 1,
//       infinite: false,
//     },
//   },
// ];

export default ArkCarousel;
