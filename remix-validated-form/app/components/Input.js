import { useField } from "remix-validated-form";

export const Input = ({ name, label }) => {
  const { error, getInputProps } = useField(name);

  return (
    <div>
      <label htmlFor={name}>
        {label}: {""}
      </label>
      <input {...getInputProps({ id: name })} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
