import NavBar from "./NavBar";
export default function Layout({ childrun }) {
  return (
    <>
      <NavBar />
      <div>{childrun}</div>
    </>
  );
}
