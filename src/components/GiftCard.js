function GiftCard({ imgURL, title }) {
  return (
    <div className="gifts-card">
      <img src={imgURL} alt="" />
      <p className="card-title">{title}</p>
      <button>see more</button>
    </div>
  );
}

export default GiftCard;
