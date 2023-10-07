import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardId } from "../../LocalStorage/LocalStorage";
import DisplayBook from "../../Components/DisplayBook/DisplayBook";
const Booked = () => {
  const [booked, setBooked] = useState([]);
  const cards = useLoaderData();

  useEffect(() => {
    const storedData = getStoredCardId();
    if (cards.length > 0) {
      const newCards = [];
      for (const id of storedData) {
        const tour = cards?.find((item) => item.id == id);
        if (tour) {
          newCards.push(tour);
        }
      }
      setBooked(newCards);
    }
  }, [cards]);
  return (
    <div className=" px-5 md:px-10 lg:px-36 py-5 md:py-10">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {booked.map((book) => (
          <DisplayBook key={book.id} book={book}></DisplayBook>
        ))}
      </div>
    </div>
  );
};

export default Booked;
