import Footer from "~/components/Footer";
import Nav from "~/components/nav";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header className="sticky top-0 z-50 border border-b-gray-400">
        <Nav cartCount={3} />
      </header>
      <main className="mb-auto h-10 bg-cwsGreen">Content</main>
      <Footer />
    </div>
  );
}
