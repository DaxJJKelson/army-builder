import { useParams } from "react-router-dom";
import portfolioData from "../data/portfolioData";

export default function PortfolioDetails() {
  const { id } = useParams();

  const project = portfolioData.find((p) => p.id === id);

  if (!project) return <p>Project not found</p>;

  return (
    <section>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>Tech Used: {project.tech?.join(", ")}</p>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          View GitHub Repo
        </a>
      )}
    </section>
  );
}
