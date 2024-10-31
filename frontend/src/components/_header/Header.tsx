import kotaUrl from "./img/kota.jpg";
import { useState } from "react";

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const handleBarClick = () => {
    if (clicked) {
      return (
        <>
          <a href="#top" className="h-3/4 ml-3" onClick={() => setClicked(false)}>
            <img
              src={kotaUrl}
              alt="Kota Profile Pic"
              className="rounded-full border-[1px] border-transparent h-full hover:border-white"
            />
          </a>
          <div className="text-gray-200">
            <a href="#about" className="hover:underline ml-3 mr-3 text-lg" onClick={() => setClicked(false)}>
              About
            </a>
            <a href="#projects" className="hover:underline mr-3 text-lg" onClick={() => setClicked(false)}>
              Projects
            </a>
            <a href="#contacts" className="hover:underline mr-3 text-lg" onClick={() => setClicked(false)}>
              Contacts
            </a>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <div
        className="min-w-[350px] sticky top-0 h-12 p-1 flex items-center navmax:justify-end"
        style={clicked ? { backgroundColor: "rgb(30 41 59)" } : {}}
      >
        <a href="#top" className="h-3/4 ml-3 navmax:hidden">
          <img
            src={kotaUrl}
            alt="Kota Profile Pic"
            className="rounded-full border-[1px] border-transparent h-full hover:border-white"
          />
        </a>
        <div className="text-gray-200 navmax:hidden">
          <a href="#about" className="hover:underline ml-3 mr-3 text-lg">
            About
          </a>
          <a href="#projects" className="hover:underline mr-3 text-lg">
            Projects
          </a>
          <a href="#contacts" className="hover:underline mr-3 text-lg">
            Contacts
          </a>
        </div>
        {handleBarClick()}
        <button
          className="navmin:hidden bg-slate-800"
          onClick={() => setClicked((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
