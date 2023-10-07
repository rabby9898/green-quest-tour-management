import { Carousel } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <div data-aos="zoom-in-left">
      <Carousel
        // autoplay={true}
        // loop={true}
        // autoplayDelay={4000}
        className="rounded-xl"
      >
        <img
          src="https://i.ibb.co/DYZ2W51/man-enjoying-rural-surroundings.jpg"
          alt="image 1"
          className="h-[500px] md:h-[750px] w-full object-cover"
        />
        <img
          src="https://i.ibb.co/WBVPHfD/woman-with-camera-world-photographer-day.jpg"
          alt="image 2"
          className="h-[500px] md:h-[750px] w-full object-cover"
        />
        <img
          src="https://i.ibb.co/CKWdG01/beautiful-young-couple-posing-sea-beach-love-tenderness.jpg"
          alt="image 3"
          className="h-[500px] md:h-[750px] w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default Banner;
