import { Link } from "@remix-run/react";
import AccordionButton from "./Accordion/AccordionButton";

export default function WeirdAl() {
  return (
    <div id="why-choose-us" className="w-full bg-white p-5">
      <div className="w-3/4 m-auto text-center">
        <h2 className="text-center m-2 text-xl">WHY CHOOSE US</h2>
        <div className="flex justify-between">
          <AccordionButton
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

// ease-in-out
