import { useEffect, useState } from "react";

type GithubProfile = {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
};

function App() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/funkchan")
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  if (!profile) return <div style={{ color: '#00fff7', background: '#18122B', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Orbitron, monospace' }}>Loading...</div>;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #18122B 0%, #393053 100%)',
        color: '#00fff7',
        fontFamily: 'Orbitron, monospace',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <img
        src={profile.avatar_url}
        alt={profile.login}
        style={{
          borderRadius: '50%',
          width: 140,
          height: 140,
          border: '4px solid #ff00ea',
          boxShadow: '0 0 30px #ff00ea, 0 0 60px #00fff7',
          marginBottom: '1.5rem',
        }}
      />
      <h1
        style={{
          fontSize: '2.5rem',
          color: '#ff00ea',
          textShadow: '0 0 10px #ff00ea, 0 0 20px #00fff7',
          marginBottom: '0.5rem',
        }}
      >
        {profile.login}
      </h1>
      <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem', maxWidth: 400 }}>{profile.bio}</p>
      <p>
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#00fff7',
            textDecoration: 'none',
            borderBottom: '2px solid #ff00ea',
            fontWeight: 700,
            transition: 'color 0.2s',
          }}
        >
          View GitHub Profile
        </a>
      </p>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: '2.5rem',
          marginTop: '2rem',
        }}
      >
        <li style={{ color: '#00fff7', fontWeight: 600, fontSize: '1.2rem', textShadow: '0 0 8px #00fff7' }}>
          <span style={{ color: '#ff00ea' }}>Repos:</span> {profile.public_repos}
        </li>
        <li style={{ color: '#00fff7', fontWeight: 600, fontSize: '1.2rem', textShadow: '0 0 8px #00fff7' }}>
          <span style={{ color: '#ff00ea' }}>Followers:</span> {profile.followers}
        </li>
        <li style={{ color: '#00fff7', fontWeight: 600, fontSize: '1.2rem', textShadow: '0 0 8px #00fff7' }}>
          <span style={{ color: '#ff00ea' }}>Following:</span> {profile.following}
        </li>
      </ul>
    </div>
  );
}

export default App;