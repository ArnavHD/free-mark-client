import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Carousel = () => {
  return (
    <div className="mt-20 mb-20 md:mx-10">
      <h2 className="text-5xl font-bold mb-10 text-center">Our Services</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4} // 👈 4 slides visible
        spaceBetween={20}
        slidesPerGroup={1} // 👈 move ONE slide at a time
        loop={true}
        autoplay={{
          delay: 2500, // ⏱️ time between slides (ms)
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide>
          <div className="  h-100 bg-[url('https://i.ibb.co/ksh20G7g/photomen.webp')] bg-cover bg-center bg-no-repeat rounded-xl">
            <div className="pt-2 flex justify-end">
              <h3 className="relative z-10 text-black mr-2 w-30 p-2 bg-white rounded-sm text-center ">
                11 Listing
              </h3>
            </div>
            <div className="h-64 felx justify-center items-end">
              <h3 className="relative z-10 text-white text-xl text-center mt-80 font-bold">
                Photographer
              </h3>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent rounded-xl"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500 h-100 bg-cover bg-left bg-no-repeat rounded-xl bg-[url('https://i.ibb.co/rKX4sd7Y/mic.jpg')]">
            <div className="pt-2 flex justify-end">
              <h3 className="relative z-10 text-black mr-2 w-30 p-2 bg-white rounded-sm text-center ">
                13 Listing
              </h3>
            </div>
            <div className="h-64 felx justify-center items-end">
              <h3 className="relative z-10 text-white text-xl text-center mt-80 font-bold">
                Music and Audio
              </h3>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent rounded-xl"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500 h-100 bg-cover  bg-no-repeat rounded-xl bg-[url('https://i.ibb.co/08yZvcp/writer.jpg')]">
            <div className="pt-2 flex justify-end">
              <h3 className="relative z-10 text-black mr-2  w-30 p-2 bg-white rounded-sm text-center ">
                15 Listing
              </h3>
            </div>
            <div className="h-64 felx justify-center items-end">
              <h3 className="relative z-10 text-white text-xl text-center mt-80 font-bold">
                Writer and Planner
              </h3>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent rounded-xl"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500 h-100 bg-cover bg-center bg-no-repeat rounded-xl bg-[url('https://i.ibb.co/HTsQ9QYW/content-Creator.jpg')]">
            <div className="pt-2 flex justify-end">
              <h3 className="relative z-10 text-black mr-2 w-30 p-2 bg-white rounded-sm text-center ">
                17 Listing
              </h3>
            </div>
            <div className="h-64 felx justify-center items-end">
              <h3 className="relative z-10 text-white text-xl text-center mt-80 font-bold">
                Content Creator
              </h3>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent rounded-xl"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500 h-100 bg-cover bg-center bg-no-repeat rounded-xl bg-[url('https://i.ibb.co/Xmhy0hY/ai.jpg')]">
            <div className="pt-2 flex justify-end">
              <h3 className="relative z-10 text-black mr-2 w-30 p-2 bg-white rounded-sm text-center ">
                20 Listing
              </h3>
            </div>
            <div className="h-64 felx justify-center items-end">
              <h3 className="relative z-10 text-white text-xl text-center mt-80 font-bold">
                AI Services
              </h3>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent rounded-xl"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500 h-100 bg-cover bg-center bg-no-repeat rounded-xl bg-[url('https://i.ibb.co/677yxB73/graphics-Designers.jpg')]">
            <div className="pt-2 flex justify-end">
              <h3 className="relative z-10 text-black mr-2 w-30 p-2 bg-white rounded-sm text-center ">
                13 Listing
              </h3>
            </div>
            <div className="h-64 felx justify-center items-end">
              <h3 className="relative z-10 text-white text-xl text-center mt-80 font-bold">
                Graphics Designers
              </h3>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent rounded-xl"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500 h-100 bg-cover bg-center bg-no-repeat rounded-xl bg-[url('https://i.ibb.co/BK5XrpwH/csimg.jpg')]">
            <div className="pt-2 flex justify-end">
              <h3 className="relative z-10 text-black mr-2 w-30 p-2 bg-white rounded-sm text-center ">
                15 Listing
              </h3>
            </div>
            <div className="h-64 felx justify-center items-end">
              <h3 className="relative z-10 text-white text-xl text-center mt-80 font-bold">
                Programming and Tech
              </h3>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent rounded-xl"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500 h-100 bg-cover bg-center bg-no-repeat rounded-xl bg-[url('https://i.ibb.co/mrz0dTwG/digital.png')]">
            <div className="pt-2 flex justify-end">
              <h3 className="relative z-10 text-black mr-2 w-30 p-2 bg-white rounded-sm text-center ">
                18 Listing
              </h3>
            </div>
            <div className="h-64 felx justify-center items-end">
              <h3 className="relative z-10 text-white text-xl text-center mt-80 font-bold">
                Digital Marketing
              </h3>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent rounded-xl"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500 h-100 bg-cover bg-center bg-no-repeat rounded-xl bg-[url('https://i.ibb.co/5XjsPJ1P/consultant.avif')]">
            <div className="pt-2 flex justify-end">
              <h3 className="relative z-10 text-black mr-2 w-30 p-2 bg-white rounded-sm text-center ">
                17 Listing
              </h3>
            </div>
            <div className="h-64 felx justify-center items-end">
              <h3 className="relative z-10 text-white text-xl text-center mt-80 font-bold">
                Consultant
              </h3>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent rounded-xl"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500 h-100 bg-cover bg-center bg-no-repeat rounded-xl bg-[url('https://i.ibb.co/m5YC5vzQ/seo.png')]">
            <div className="pt-2 flex justify-end">
              <h3 className="relative z-10 text-black mr-2 w-30 p-2 bg-white rounded-sm text-center ">
                14 Listing
              </h3>
            </div>
            <div className="h-64 felx justify-center items-end">
              <h3 className="relative z-10 text-white text-xl text-center mt-80 font-bold">
                SEO Writer
              </h3>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent rounded-xl"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
