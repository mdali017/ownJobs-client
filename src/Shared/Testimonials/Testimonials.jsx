import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Testimonials = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <SectionTitle
        subHeading="Happy Client"
        subHeadingleft="for My Sevices"
        Heading="Testimonials"
      ></SectionTitle>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className=""
      >
        <SwiperSlide>
          <div className="text-center w-[60%] mx-auto">
            <img
              src="https://images.pexels.com/photos/5668886/pexels-photo-5668886.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-[60px] mx-auto rounded-lg"
            />
            <p className="w-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur dignissimos doloribus ipsa laborum dolore eum deserunt
              sequi harum praesentium commodi repellat laboriosam, debitis
              placeat quo voluptatibus a sint totam autem?
            </p>
            <h1 className="mt-5 text-2xl font-bold">John Doe</h1>
            <h3 className="text-gray-400">Web Developer</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center w-[60%] mx-auto">
            <img
              src="https://images.pexels.com/photos/5717512/pexels-photo-5717512.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-[60px] mx-auto rounded-lg"
            />
            <p className="w-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur dignissimos doloribus ipsa laborum dolore eum deserunt
              sequi harum praesentium commodi repellat laboriosam, debitis
              placeat quo voluptatibus a sint totam autem?
            </p>
            <h1 className="mt-5 text-2xl font-bold">Alexa</h1>
            <h3 className="text-gray-400">Web Designer</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center w-[60%] mx-auto">
            <img
              src="https://images.pexels.com/photos/5717512/pexels-photo-5717512.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-[60px] mx-auto rounded-lg"
            />
            <p className="w-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur dignissimos doloribus ipsa laborum dolore eum deserunt
              sequi harum praesentium commodi repellat laboriosam, debitis
              placeat quo voluptatibus a sint totam autem?
            </p>
            <h1 className="mt-5 text-2xl font-bold">John Doe</h1>
            <h3 className="text-gray-400">Web Developer</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center w-[60%] mx-auto">
            <img
              src="https://images.pexels.com/photos/5717512/pexels-photo-5717512.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-[60px] mx-auto rounded-lg"
            />
            <p className="w-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur dignissimos doloribus ipsa laborum dolore eum deserunt
              sequi harum praesentium commodi repellat laboriosam, debitis
              placeat quo voluptatibus a sint totam autem?
            </p>
            <h1 className="mt-5 text-2xl font-bold">John Doe</h1>
            <h3 className="text-gray-400">Web Developer</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center w-[60%] mx-auto">
            <img
              src="https://images.pexels.com/photos/5717512/pexels-photo-5717512.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-[60px] mx-auto rounded-lg"
            />
            <p className="w-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur dignissimos doloribus ipsa laborum dolore eum deserunt
              sequi harum praesentium commodi repellat laboriosam, debitis
              placeat quo voluptatibus a sint totam autem?
            </p>
            <h1 className="mt-5 text-2xl font-bold">John Doe</h1>
            <h3 className="text-gray-400">Web Developer</h3>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg> */}
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Testimonials;
