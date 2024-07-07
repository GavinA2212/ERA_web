import Logo from "./assets/Logo.png";
export default function Header() {
  return (
    <>
      <header className="fixed top-0 flex h-28 w-full">
        <img src={Logo} className="max-h-14"></img>
      </header>
    </>
  );
}
