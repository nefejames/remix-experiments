export default function CharacterCard({ name, image, species }) {
  return (
    <div>
      <img src={image} />
      <p>Name: {name}</p>
      <p>Species: {species}</p>
    </div>
  );
}
