import { useLoaderData } from "react-router-dom";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="px-5 md:px-10 lg:px-36 py-5 md:py-10">
      <div className="my-20">
        <h1 className="text-6xl text-green-700 font-bold text-center ">
          Our Services
        </h1>
        <hr className="bg-green-700 w-[130px] mt-3 h-[5px] mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 lg:gap-20">
        {services.map((item) => (
          <ServicesCard key={item.id} item={item}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
