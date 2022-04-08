import Form from "../../components/Form";
import { useLoaderData } from "remix";
import getCharacters from "~/api/characters";
import CharacterCard from "../../components/CharacterCard";
import characterStyles from "../styles/characters.css";

export const links = () => [{ rel: "stylesheet", href: characterStyles }];

export const loader = async function () {
  return getCharacters();
};

export default function Index() {
  const characters = useLoaderData();

  return (
    <div>
      <h1>Remix Rick and Morty</h1>

      <Form />
      <ul className="grid">
        {characters.results.map(({ name, image, species }, i) => (
          <li key={i}>
            <CharacterCard name={name} image={image} species={species} />
          </li>
        ))}
      </ul>
    </div>
  );
}
