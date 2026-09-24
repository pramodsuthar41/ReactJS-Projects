function Coin({ info }) {
  return (
    <>
      <img
        style={{ width: "300px", height: "300px" }}
        src={info.imgSrc}
        alt={info.side}
      />
    </>
  );
}

export default Coin;
