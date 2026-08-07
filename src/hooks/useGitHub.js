import { useEffect, useState } from 'react';

const username = import.meta.env.VITE_GITHUB_USERNAME || 'zeyadhatem00';
const headers = { Accept: 'application/vnd.github+json' };

function decodeReadme(content) {
  try { return atob(content.replace(/\n/g, '')); } catch { return ''; }
}

export function useGitHub() {
  const [data, setData] = useState({ profile: null, repos: [], readme: '', loading: true, error: '' });
  useEffect(() => {
    let active = true;
    Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }).then((r) => { if (!r.ok) throw new Error('Profile unavailable'); return r.json(); }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers }).then((r) => { if (!r.ok) throw new Error('Repositories unavailable'); return r.json(); }),
      fetch(`https://api.github.com/repos/${username}/${username}/readme`, { headers }).then((r) => r.ok ? r.json() : { content: '' }),
    ]).then(([profile, repos, readme]) => {
      if (!active) return;
      setData({ profile, repos: repos.filter((repo) => repo.name.toLowerCase() !== username.toLowerCase()), readme: decodeReadme(readme.content || ''), loading: false, error: '' });
    }).catch((error) => { if (active) setData((current) => ({ ...current, loading: false, error: error.message })); });
    return () => { active = false; };
  }, []);
  return { ...data, username };
}
