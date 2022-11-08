import { Form } from "@remix-run/react";

export default function ContactForm() {
  return (
    <div className="m-auto w-1/3">
      <Form method="post" className="flex flex-col">
        <input
          placeholder="Name"
          name="Name"
          className="bg-gray-400 bg-opacity-20 border-2 border-slate-900 placeholder:text-slate-400 p-2 mb-2 "
        ></input>
        <input
          placeholder="Email"
          name="Email"
          className="bg-gray-400 bg-opacity-20 border-2 border-slate-900 placeholder:text-slate-400 p-2 mb-2 "
        ></input>
        <textarea
          placeholder="Your Message"
          name="Your Message"
          className="bg-gray-400 bg-opacity-20 border-2 border-slate-900 placeholder:text-slate-400 p-2 mb-2 h-20 "
        ></textarea>

        <button
          className=" w-1/2 bg-cwsBlue p-2 border-slate-800 border-2 rounded text-white"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
}
