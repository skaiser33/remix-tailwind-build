import { Link } from "@remix-run/react";

export default function ChooseBox({ name, description }) {
  return (
    <div className="flex w-3/4 justify-center items-center px-2  bg-[url('/img/hero-bill-640x360.jpg')]  bg-center  m-2 p-8 border-slate-800 border-2 rounded">
      <div className="bg-white/75 ">
        <h2 className="">{name}</h2>
        <p className="bg-white/25 p-2 text-xs">{description}</p>
      </div>
    </div>
  );
}
