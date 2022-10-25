import { Link } from "@remix-run/react";

export default function GetStartedButton({ name }) {
  return (
    <div className="flex w-1/2 justify-center items-center px-1  bg-cwsBlue  bg-center m-3  p-2 border-slate-800 border-2 rounded">
      <div className="">
        <h2 className="text-white">{name}</h2>
      </div>
    </div>
  );
}
