import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Typewriter } from "react-simple-typewriter";

const NewSlider = () => {
  return (
    <div className=" ">
      <div className="">
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          style={{ zIndex: 0 }}
        >
          <div>
            <div>
              <SwiperSlide>
                <div
                  className="hero h-[80vh]"
                  style={{
                    backgroundImage: "url(https://i.ibb.co/T2n7xm1/image.png)",
                  }}
                >
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-white lg:w-[50%]">
                    <div className="">
                      <h1 className="mb-5 text-5xl font-bold">
                        <h2 className="text-6xl mb-4 text-[#2ECC71]">
                          <Typewriter
                            words={["PALESTINE EMERGENCY"]}
                            loop={99999900}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={80}
                            delaySpeed={1000}
                          />
                        </h2>
                      </h1>
                      <p className="mb-5">
                        Palestinian cuisine under threat amid emergency. Support
                        needed to ensure access to food, preserve culinary
                        heritage, and alleviate hunger in crisis-stricken areas.
                        Stand for food security in Palestine now
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="hero h-[80vh]"
                  style={{
                    backgroundImage: "url(https://i.ibb.co/0XNGhVW/image.png)",
                  }}
                >
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-white lg:w-[50%]">
                    <div className="">
                      <h2 className="text-6xl mb-4 text-[#2ECC71]">
                        <Typewriter
                          words={["Together, We Can Transform the World"]}
                          loop={99999900}
                          cursor
                          cursorStyle="_"
                          typeSpeed={100}
                          deleteSpeed={80}
                          delaySpeed={1000}
                        />
                      </h2>
                      <p className="mb-5">
                        Planting trees is our global responsibility. Join us to
                        create a greener, healthier world for all. Together, we
                        can make a difference
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="hero h-[80vh]"
                  style={{
                    backgroundImage: "url(https://i.ibb.co/Fz532Nq/image.png)",
                  }}
                >
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-white lg:w-[50%]">
                    <div className="">
                      <h2 className="text-6xl mb-4 text-[#2ECC71]">
                        <Typewriter
                          words={["Donate Blood, Save Lives!"]}
                          loop={99999900}
                          cursor
                          cursorStyle="_"
                          typeSpeed={100}
                          deleteSpeed={80}
                          delaySpeed={1000}
                        />
                      </h2>
                      <p className="mb-5">
                        By donating blood, you're giving the gift of life. Your
                        simple act of generosity can make a profound difference,
                        saving lives and bringing hope to those in need.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default NewSlider;
