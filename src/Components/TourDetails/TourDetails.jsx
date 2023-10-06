import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const TourDetails = () => {
  const [selected, setSelected] = useState([]);
  const cards = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const selectedCards = cards?.find((item) => item.id == id);
    setSelected(selectedCards);
  }, [id, cards]);

  const { title, image, price, description, Highlights, tour_plan } = selected;

  return (
    <div className="px-36 h-full">
      <img className="w-full h-[600px]" src={image} alt="" />

      <div>
        <h4 className="text-3xl font-semibold my-10">{title}</h4>
        <h4 className="text-xl font-semibold mb-2">About Your Trip</h4>

        <p className="text-base text-gray-600 my-5">{description}</p>
        <hr />
        <h4 className="text-xl font-semibold my-5">Highlights</h4>
        <p className="text-base text-gray-600 my-5">{Highlights}</p>
        <hr />
        <h4 className="text-xl font-semibold my-5">Tour Plan</h4>
        <p className="text-base text-gray-600 my-5">{tour_plan}</p>
        <h4 className="text-3xl font-light text-green-700 my-5">
          Price: {price}
        </h4>
        <div>
          <Link
            to="/booked"
            className="btn btn-primary flex justify-center px-10 text-lg items-baseline h-fit bg-green-700 py-4 text-white border-0 outline-0 hover:border hover:border-green-700 hover:text-green-700 hover:bg-transparent"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
