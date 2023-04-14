import mark from "../../Images/icons/mark.png";

export default function Promotion(props: {
  active: boolean;
  price: number;
  name: string;
  promotions: string[];
}) {
  return (
    <div className={`ServiceCard${props.active ? " ActiveService" : ""}`}>
      <div className="priceGet">
        <div className="Price">${props.price}</div>
        <div className="Line"></div>
        <div className="Assist">{props.name}</div>
      </div>
      <h2>Terms and Condition</h2>
      <div className="Promotions">
        {props.promotions.map((e, i) => (
          <div key={i} className="Promotion">
            <div className="PromotionLogo">
              <img src={mark} alt="mark" />
            </div>
            <p>{e}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
