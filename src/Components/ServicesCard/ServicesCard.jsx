import {
  BiSolidPlane,
  BiSolidHotel,
  BiSolidBus,
  BiSolidDrink,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServicesCard = ({ item }) => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  const { id, title, image, price, details, travel_period, duration } = item;
  return (
    <>
      <div
        data-aos="zoom-out-left"
        className="card w-full bg-base-100 shadow-xl"
      >
        <img
          className="w-full h-[200px] md:h-[350px] rounded-t-xl"
          src={image}
          alt=""
        />

        <div className="card-body relative">
          <h2 className="card-title my-2 md:my-3 text-2xl"> {title}</h2>
          <h4 className="text-lg my-2 md:my-3">{travel_period}</h4>
          <div className="flex justify-start gap-4 text-2xl my-3">
            <BiSolidPlane />
            <BiSolidHotel />
            <BiSolidBus />
            <BiSolidDrink />
          </div>
          <p className="text-base my-3 md:my-5">{details}</p>
          <h4 className="text-xl font-light mb-3">From {price}</h4>

          <h5 className="bg-green-700 text-sm text-white px-10 py-3 absolute bottom-[29.7rem] left-0 hidden lg:block">
            {duration}
          </h5>

          <Link
            to={`/tour-details/${id}`}
            className="btn btn-primary flex justify-center text-lg items-baseline h-fit bg-green-700 py-4 text-white border-0 outline-0 hover:border hover:border-green-700 hover:text-green-700 hover:bg-transparent"
          >
            See Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
