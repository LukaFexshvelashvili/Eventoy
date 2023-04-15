import "./UserCard.css";

export default function UserCard(props: {
  image: string;
  name: string;
  location: string;
  description: string;
}) {
  return (
    <div className="UserCard">
      <div className="CardStart">
        <img src={props.image} alt="user" />
        <div className="UserInfo">
          <h2>{props.name}</h2>
          <p>{props.location}</p>
        </div>
      </div>
      <div className="CardDesc">{props.description}</div>
    </div>
  );
}
