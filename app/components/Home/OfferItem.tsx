import { Link } from "@remix-run/react";

export default function OfferItem({ name, service }) {
  return (
    <div>
      <div className="flex justify-center items-center px-2 rounded-full bg-cwsBlue text-white  text-xl">
        {name}
      </div>
      <h3>{service}</h3>
    </div>
  );
}
