import GitApi from "./GitApi.tsx"

interface CardProps {
  user: string; // Typage pour user (ajustez selon vos besoins)
  name: string; // Typage pour name
  desc: string; // Typage pour desc
}

const Card: React.FC<CardProps> = ({ user, name, desc }) => {
  return (
    <div className="card">
      <h2>{user}</h2>
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
