import kotaUrl from "./img/kota.jpg";

export default function Header() {
  return (
    <>
      <div className="min-w-[350px] sticky top-0 h-12 p-1">
        <img
          src={kotaUrl}
          alt="Kota Profile Pic"
          className="rounded-full h-3/4 ml-3 float-left"
        />
        <div className="float-right">
          <a href="#about" className="hover:underline ml-3 mr-3 text-lg">
            About
          </a>
          <a href="#projects" className="hover:underline mr-3 text-lg">
            Projects
          </a>
          <a href="#links" className="hover:underline mr-3 text-lg">
            Links
          </a>
        </div>
      </div>
    </>
  );
}
