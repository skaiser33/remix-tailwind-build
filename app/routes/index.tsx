import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="sticky top-0 z-50 ">
        <div className="flex items-center">
          <img src="/img/alogo-4.png" alt="logo" className="max-h-24" />
          <div className="flex absolute right-5 justify-between">
            <Link className="px-5" to="/">
              Home
            </Link>
            <Link className="px-5" to="/meet-our-team">
              Meet Our Team
            </Link>
          </div>
        </div>
      </header>

      <main className="mb-auto h-10 bg-green-500">Content</main>
      <footer className="h-10 bg-blue-500 mt-auto">FOOTER</footer>
    </div>
  );
}
