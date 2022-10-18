import Footer from "~/components/Footer";
import Nav from "~/components/Nav";
import Hero from "~/components/Hero";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-cwsGreen">
      <header className="sticky top-0 z-50 border border-b-gray-400">
        <Nav cartCount={3} />
      </header>
      <Hero />
      <main className=""></main>
      <Footer />
    </div>
  );
}
