import { useActionData } from "remix";
import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { SubmitBtn } from "~/components/submitBtn";
import { Input } from "~/components/Input";
import { z } from "zod";

export const validator = withZod(
  z
    .object({
      name: z
        .string()
        .nonempty("Name is required")
        .min(3, "Name must be at least 3 characters long"),
      email: z
        .string()
        .nonempty("Email is required")
        .email("Invalid emaill address"),
      password: z
        .string()
        .nonempty("Password is required")
        .min(6, "Password must be at least 6 characters long"),
      confirmPassword: z.string(),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    })
);

export const action = async ({ request }) => {
  const result = await validator.validate(await request.formData());

  if (result.error) {
    // validationError comes from `remix-validated-form`
    return validationError(result.error);
  }

  return result;
};

export default function Sign() {
  const actionData = useActionData();

  console.log(actionData);
  return (
    //this lab his onchange, onblur and onsubmit validation
    <ValidatedForm
      validator={validator}
      method="post"
      defaultValues={{ name: "Nefe", email: "nefejames@yahoo.com" }}
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <Input name="name" label="Name" />
      <Input name="email" label="Email" />
      <Input name="password" label="Password" />
      <Input name="confirmPassword" label="Confirm Password" />
      <SubmitBtn />
    </ValidatedForm>
  );
}
