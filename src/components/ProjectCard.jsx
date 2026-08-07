import { ExternalLink, GitFork, Star, Code2 } from 'lucide-react';

export default function ProjectCard({ repo }) {
  const tags = [...new Set([repo.language, ...(repo.topics || [])].filter(Boolean))].slice(0, 4);
  return <article className="project-card reveal-card">
    <div className="project-card__top"><span className="mono-label">{String(repo.id).slice(-4)} / repo</span><span className="project-dot" /></div>
    <h3>{repo.name.replaceAll('-', ' ')}</h3>
    <p>{repo.description || 'An experiment in thoughtful interface design and useful digital experiences.'}</p>
    <div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    <div className="project-card__bottom"><div className="repo-stats"><span><Star size={14} /> {repo.stargazers_count}</span><span><GitFork size={14} /> {repo.forks_count}</span></div><div className="project-actions">{repo.homepage && <a href={repo.homepage} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>}<a href={repo.html_url} target="_blank" rel="noreferrer">Code <Code2 size={14} /></a></div></div>
  </article>;
}
