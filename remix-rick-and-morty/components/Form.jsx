import formStyles from "../app/styles/form.css";

export const links = () => [{ rel: "stylesheet", href: formStyles }];

export default function Form() {
  return (
    <form>
      <label>Search</label>
      <input type="text" placeholder="search character" name="character" />

      <button>Search</button>
    </form>
  );
}
