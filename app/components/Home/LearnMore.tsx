import { Link } from "@remix-run/react";

export default function LearnMore() {
  return (
    <div id="learn-more" className="flex  ">
      <div className="w-3/5 bg-white border-red-900 border-2 flex items-center">
        <p className="p-3">
          Lorem ipsum dolor sit amet, inermis apeirian tacimates ne sit. Iriure
          mnesarchum repudiandae ne nec. Ea zril malorum praesent cum. Primis
          putant assueverit his id. Nam id inani denique antiopam, id aperiam
          expetenda est. Cu has eius malis facilis, eos ex legimus insolens
          referrentur, appetere ocurreret eam eu. No brute maluisset nam, munere
          nominavi rationibus ei pri. Ferri ridens in eos. Ex quidam democritum
          his, ea vel vivendo referrentur, quas veniam viderer te mei.
        </p>
      </div>
      <div className="w-2/5 bg-slate-500 text-white border-red-900 border-2 ">
        <p className="p-3">
          Lorem ipsum dolor sit amet, inermis apeirian tacimates ne sit. Iriure
          mnesarchum repudiandae ne nec. Ea zril malorum praesent cum. Primis
          putant assueverit his id. Nam id inani denique antiopam, id aperiam
          expetenda est.
        </p>
        <div className="text-center">
          <Link to="/cart">
            <button className="border p-3 m-3 ">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
