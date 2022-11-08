import ContactForm from "~/components/ContactForm";
import { ActionFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// like a get, server side only
// export const loader: LoaderFunction = () => {};

// for post, server side, replaces ajax/axios
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const values = Object.fromEntries(formData);
  console.log(values);
  return values;
};

export default function contact() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <ContactForm />
      </div>
      ;
    </>
  );
}
