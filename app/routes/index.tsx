import { Link } from "@remix-run/react";
import Nav from "~/components/nav";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header className="sticky top-0 z-50 ">
        <Nav cartCount={3} />
      </header>

      <main className="mb-auto h-10 bg-green-500">Content</main>
      <footer className=" bg-blue-500 mt-auto">FOOTER</footer>
    </div>
  );
}
