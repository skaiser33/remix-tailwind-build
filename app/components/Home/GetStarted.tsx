import { Link } from "@remix-run/react";
import GetStartedButton from "./GetStartedButton";
import OfferItem from "./OfferItem";

export default function GetStarted() {
  return (
    <div id="why-choose-us" className="w-full bg-amber-700 p-5">
      <div className="w-100% m-auto text-center">
        <div className="flex justify-between items-center">
          <h2 className="text-center m-2 text-xl text-white">GET STARTED</h2>
          <GetStartedButton name={"Support"} />
          <GetStartedButton name={"Design"} />
          <GetStartedButton name={"Development"} />
        </div>
      </div>
    </div>
  );
}
