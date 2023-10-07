const getStoredCardId = () => {
  const storedId = localStorage.getItem("booked-card");
  if (storedId) {
    const parseStoredId = JSON.parse(storedId);
    return parseStoredId;
  }
  return [];
};

const saveBookId = (id) => {
  const prevId = getStoredCardId();
  const existsId = prevId.find((itemId) => itemId === id);
  if (!existsId) {
    prevId.push(id);
    localStorage.setItem("booked-card", JSON.stringify(prevId));
  }
};
export { getStoredCardId, saveBookId };
