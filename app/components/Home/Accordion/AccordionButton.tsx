/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import ChevronDown from "../ChevronDown";

export default function AccordionButton({ name, description }) {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          // className="inline-flex w-fng-offset-2 focus:ring-offset-gray-100"
          className="inline-flex focus:ring-offset-gray-100 px-5 items-center"
          // w-full justify-center
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {name}
          {/* <!-- Heroicon name */}

          <ChevronDown />
        </button>
      </div>
    </div>
  );
}
