import Nav from "../components/Nav";

export default function Layout({ children }) {
  return (
    <div className="">
      <Nav />
      <div className="mt-[6rem] lg:mr-[4rem] lg:mt-0">{children}</div>
    </div>
  );
}
