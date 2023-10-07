import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveBookId } from "../../LocalStorage/LocalStorage";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const TourDetails = () => {
  const [selectedTour, setSelectedTour] = useState([]);
  const cards = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  useEffect(() => {
    const newCards = cards?.find((card) => card.id === idInt);
    setSelectedTour(newCards);
    saveBookId(id);
    console.log(newCards);
  }, []);

  const {
    title,
    image,
    price,
    description,
    Highlights,
    tour_plan,
    travel_period,
  } = selectedTour;

  const handleToast = () => {
    toast.success("Congratulations! You Have Booked the tour Successfully");
  };
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <div className="h-full px-5 md:px-10 lg:px-36 py-5 md:py-28">
      <img
        data-aos="zoom-in-up"
        className="w-full h-[400px] md:h-[600px] rounded-xl"
        src={image}
        alt=""
      />

      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 py-10">
        <div data-aos="zoom-in-left" className="col-span-1 md:col-span-2">
          <h4 className="text-3xl font-semibold my-10">{title}</h4>
          <h4 className="text-xl font-semibold mb-2">About Your Trip</h4>

          <p className="text-base text-gray-600 my-5">{description}</p>
          <hr />
          <h4 className="text-xl font-semibold my-5">Highlights</h4>
          <p className="text-base text-gray-600 my-5">{Highlights}</p>
          <hr />
          <h4 className="text-xl font-semibold my-5">Tour Plan</h4>
          <p className="text-base text-gray-600 my-5">{tour_plan}</p>
        </div>
        <div
          data-aos="zoom-in-right"
          className="border-0 md:border-l p-1 md:p-10"
        >
          <div className="card w-full bg-base-100 shadow-xl image-full my-5 md:my-10">
            <figure>
              <img src={image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{title}</h2>
              <p className="text-xl">{travel_period}</p>
              <h4 className="text-3xl font-light text-green-700 my-5">
                Price: {price}
              </h4>

              <p>What Are You Waiting For?</p>
              <div>
                <button
                  onClick={handleToast}
                  className="btn w-full flex justify-center px-10 text-lg items-baseline h-fit bg-green-700 py-4 text-white border-0 outline-0 hover:border hover:border-green-700 hover:text-green-700 hover:bg-transparent"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
