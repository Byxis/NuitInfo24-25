import React, { useEffect, useState } from 'react';
import { GitApi, GitHubUser } from './GitApi.tsx'

interface CardProps {
  username: string;
  children?: React.ReactNode; // Ajoutez cette ligne pour permettre le passage d'enfants
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
      <div className="image-container">
      <img src={user.avatar_url} alt={`${user.name}'s avatar`} style={{ width: '120px', borderRadius: '50%' }} className="hover-image" />
      </div>
      <h3><a href={`https://github.com/${username}`}>@{username}</a></h3>
      <h2>{user.name || 'Nom non disponible'}</h2>
    </div>
  );
};

export default UserCard;