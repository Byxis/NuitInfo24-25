import React, { useEffect, useState } from 'react';
import { GitApi, GitHubUser } from './GitApi.tsx'

interface CardProps {
  username: string; // Typage pour user (ajustez selon vos besoins)
}

const UserCard: React.FC<CardProps> = ({ username }) => {
  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await GitApi(username);
      setUser(data);
    };

    fetchUser();
  }, [username]);

  if (!user) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="card">
      <img src={user.avatar_url} alt={`${user.name}'s avatar`} style={{ width: '100px', borderRadius: '50%' }} />
      <h3>@{username}</h3>
      <h2>{user.name || 'Nom non disponible'}</h2>
    </div>
  );
};

export default UserCard;