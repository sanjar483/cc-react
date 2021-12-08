import GiftCard from "./GiftCard";
import img1 from "../images/Rectangle.png";
import img2 from "../images/Rectangle-1.png";
import img3 from "../images/Rectangle-2.png";
import img4 from "../images/Rectangle-3.png";

function Gifts() {
  return (
    <div className="gifts">
      <h2 className="title">Gifts for all Occasions</h2>
      <p className="subtitle">
        “Try our web app to find the best gifts for all occasions”
      </p>

      <div className="gifts-container">
        <GiftCard imgURL={img1} title="Birthday" />
        <GiftCard imgURL={img2} title="Anniversary" />
        <GiftCard imgURL={img3} title="Valentine's Day" />
        <GiftCard imgURL={img4} title="Christmas" />
      </div>
    </div>
  );
}

export default Gifts;
