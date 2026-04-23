import { Link } from "react-router-dom";

export default function PortfolioCard({ item }) {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <Link to={`/portfolio/${item.id}`}>View Details</Link>
    </div>
  );
}
