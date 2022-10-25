import { Link } from "@remix-run/react";
import ChooseBox from "./ChooseBox";
import OfferItem from "./OfferItem";

export default function WhyChooseUs() {
  return (
    <div id="why-choose-us" className="w-full bg-white p-5">
      <div className="w-3/4 m-auto text-center">
        <h2 className="text-center m-2 text-xl">WHY CHOOSE US</h2>
        <div className="flex justify-between">
          <ChooseBox
            name={"Support"}
            description={
              "Primis putant assueverit his id. Nam id inani denique antiopam, id aperiam expetenda est. "
            }
          />
          <ChooseBox
            name={"Design"}
            description={
              "Primis putant assueverit his id. Nam id inani denique antiopam, id aperiam expetenda est. "
            }
          />
          <ChooseBox
            name={"Development"}
            description={
              "Primis putant assueverit his id. Nam id inani denique antiopam, id aperiam expetenda est. "
            }
          />
          <ChooseBox
            name={"Partytime"}
            description={
              "Primis putant assueverit his id. Nam id inani denique antiopam, id aperiam expetenda est. "
            }
          />
        </div>
      </div>
    </div>
  );
}
