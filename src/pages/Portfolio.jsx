import PortfolioCard from "../components/PortfolioCard";
import portfolioData from "../data/portfolioData";

export default function Portfolio() {
  return (
    <section>
      <h1>Portfolio</h1>

      {portfolioData.map((project) => (
        <PortfolioCard key={project.id} item={project} />
      ))}
    </section>
  );
}
