interface CardProps {
  name: string;
  website: string;
  image: string;
  desc: string;
}

export const ClassicCard: React.FC<CardProps> = ({ name, website, image, desc }) => {
  return (
    <div className="card">
      <img src={image} alt={`Logo de ${name}`} style={{ width: '120px', borderRadius: '50%' }} />
      <h3 className="para"><a href={website}>{name}</a></h3>
      <h2 className="para">{desc}</h2>
    </div>
  );
};

export const ClassicCardSquare: React.FC<CardProps> = ({ name, website, image, desc }) => {
    return (
      <div className="card">
        <div className="image-container">
        <img src={image} alt={`Logo de ${name}`} style={{ width: '150px', borderRadius: '10%' }} />

        </div>
        <h3 className="para"><a href={website}>{name}</a></h3>
        <h2 className="para">{desc}</h2>
      </div>
    );
  };

export default ClassicCard;