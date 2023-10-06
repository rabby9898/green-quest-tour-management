import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
        <h4 className="text-xl font-semibold my-3">{title}</h4>
        <h4 className="text-xl font-semibold my-3"></h4>
        <p>{description}</p>
        <h4>Highlights</h4>
        <p>{Highlights}</p>
        <h4>Tour Plan</h4>
        <p>{tour_plan}</p>
        <h4>Price: {price}</h4>
      </div>
    </div>
  );
};

export default TourDetails;
