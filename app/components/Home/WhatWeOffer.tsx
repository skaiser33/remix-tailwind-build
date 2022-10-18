import { Link } from "@remix-run/react";
import OfferItem from "./OfferItem";

export default function WhatWeOffer() {
  return (
    <div id="what-we-offer" className="w-full bg-amber-700 p-5">
      <div className="w-1/2 m-auto text-center">
        <div className="text-center m-2">What We Offer</div>
        <div className="flex justify-between">
          <OfferItem name={1} service="Yea" />
          <OfferItem name={2} service="Nay" />
          <OfferItem name={3} service="Hip" />
          <OfferItem name={4} service="Hoo" />
          <OfferItem name={5} service="Ray" />
        </div>
      </div>
    </div>
  );
}
