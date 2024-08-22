import "./Card.css";

export function Card({ cardContent }) {
  return (
    <div className="card">
      <img src={cardContent.icon}></img>
      <h2>{cardContent.title}</h2>
      <p>{cardContent.text}</p>
    </div>
  );
}
export default Card;
