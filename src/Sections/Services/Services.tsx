import ServicesAPI from "../../API/Services";
import Promotion from "../../Components/Promotion/Promotion";
import "./Services.css";

export default function Services() {
  interface PromotionInt {
    active: boolean;
    price: number;
    name: string;
    promotions: string[];
  }
  return (
    <div className="Services SecPadder">
      <h1 className="Title">Which One Is Suitable For You?</h1>
      <div className="ServiceCards">
        {ServicesAPI.map((e: PromotionInt, i) => (
          <Promotion
            key={i}
            active={e.active}
            price={e.price}
            name={e.name}
            promotions={e.promotions}
          />
        ))}
      </div>
    </div>
  );
}
