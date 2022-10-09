import Nav from "~/components/nav";

export default function cart() {
  return (
    <>
      <Nav cartCount={3} />
      <div className="flex flex-col h-screen justify-between">Cart</div>;
    </>
  );
}
