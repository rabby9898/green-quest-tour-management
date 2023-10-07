import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveBookId } from "../../LocalStorage/LocalStorage";

const TourDetails = () => {
  const [selectedTour, setSelectedTour] = useState([]);
  const cards = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const newCards = cards?.find((card) => card.id === idInt);
  useEffect(() => {
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

  return (
    <div className="px-36 h-full py-20">
      <img className="w-full h-[600px] rounded-xl" src={image} alt="" />

      <div className="grid grid-cols-3 justify-items-center gap-10 py-10">
        <div className="col-span-2 ">
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
        <div className="border-l p-10">
          <div className="card w-96 bg-base-100 shadow-xl image-full my-10">
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
                <Link
                  to="/booked"
                  className="btn flex justify-center px-10 text-lg items-baseline h-fit bg-green-700 py-4 text-white border-0 outline-0 hover:border hover:border-green-700 hover:text-green-700 hover:bg-transparent"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
