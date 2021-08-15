// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Mousewheel, Navigation } from "swiper/core";

const slides = [
  {
    id: "1",
    title: "ایرلند هم زیباست",
    img: "slide-3.jpg",
  },
  {
    id: "2",
    title: "اسکاتلند هم زیباست",
    img: "slide-2.jpg",
  },
  {
    id: "3",
    title: "گرینلند هم زیباست",
    img: "slide-1.jpg",
  },
];

// install Swiper modules
SwiperCore.use([Autoplay, Mousewheel, Navigation]);

export default function App() {
  return (
    <Swiper
      direction={"vertical"}
      spaceBetween={30}
      mousewheel={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      className="mySwiper w-[90%] lg:w-[750px] h-[80vh] lg:h-[850px]"
    >
      {slides.map((slid) => (
        <SwiperSlide className="relative h-full" key={slid.id}>
          <div className="absolute top-[50%] lg:top-[70%] right-[5%] text-white z-10 p-5">
            <p className="mb-4 font-light text-lg">اسلایدر های زیبا</p>
            <h3 className="text-4xl font-black">{slid.title}</h3>
          </div>
          <Image
            src={`/${slid.img}`}
            width="750px"
            height="1000px"
            className="block object-cover rounded-md"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
