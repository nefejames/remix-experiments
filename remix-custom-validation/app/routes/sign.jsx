import { Form, useActionData } from "remix";

const validateName = (name) => {
  if (!name) {
    return "Name is required";
  } else if (typeof name !== "string" || name.length < 3) {
    return `Name must be at least 3 characters long`;
  }
};

const validateEmail = (email) => {
  if (!email) {
    return "Email is Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid emaill address";
  }
};

const validatePassword = (password) => {
  if (!password) {
    return "Password is required";
  } else if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
};

const validateComfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return "Confirm Password is required";
  } else if (password !== confirmPassword) {
    return "Password does not match";
  }
};

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());

  console.log(data);

  const formErrors = {
    name: validateName(data.name),
    email: validateEmail(data.email),
    password: validatePassword(data.password),
    confirmPassword: validateComfirmPassword(
      data.password,
      data.confirmPassword
    ),
  };

  //if there are errors, we return the form errors
  if (Object.values(formErrors).some(Boolean)) return { formErrors };

  //if there are no errors, we return the form data
  return { data };
};

export default function Sign() {
  const actionData = useActionData();

  console.log(actionData);
  return (
    <Form
      method="post"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <div>
        <label>
          Name: <input name="name" type="text" />
        </label>
        {actionData?.formErrors?.name ? (
          <p style={{ color: "red" }}>{actionData?.formErrors?.name}</p>
        ) : null}
      </div>

      <div>
        <label>
          Email: <input name="email" type="" />
        </label>
        {actionData?.formErrors?.email ? (
          <p style={{ color: "red" }}>{actionData?.formErrors?.email}</p>
        ) : null}
      </div>

      <div>
        <label>
          Password: <input name="password" type="password" />
        </label>
        {actionData?.formErrors?.password ? (
          <p style={{ color: "red" }}>{actionData?.formErrors?.password}</p>
        ) : null}
      </div>

      <div>
        <label>
          Confirm Password: <input name="confirmPassword" type="password" />
        </label>
        {actionData?.formErrors?.confirmPassword ? (
          <p style={{ color: "red" }}>
            {actionData?.formErrors?.confirmPassword}
          </p>
        ) : null}
      </div>

      <button type="submit">Create Account</button>
    </Form>
  );
}
