const Cards = ({ arr }) => {
  return (
    <>
      {arr.map((card, idx) => {
        const { name, artist } = card;
        return (
          <div key={idx}>
            <h1>{name}</h1>
            <p>{artist}</p>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
