const Card = ({ data }) => {
  return (
    <div className="group cursor-pointer rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Hair Color: {data.hair_color}</p>
      <p>Skin Color: {data.skin_color}</p>
      <p>Eye Color: {data.eye_color}</p>
    </div>
  );
};

export default Card;
