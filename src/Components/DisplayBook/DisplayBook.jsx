const DisplayBook = ({ book }) => {
  const { title, image, Status, travel_period } = book;
  return (
    <div>
      <div className="">
        <div className="w-full lg:w-[750px]  card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full lg:w-[500px] h-full lg:h-[300px]"
              src={image}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="text-base text-gray-600 mt-5">{travel_period}</p>
            <div>
              <h5 className="bg-green-700 flex justify-center text-sm text-white px-10 py-3">
                {Status}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBook;
