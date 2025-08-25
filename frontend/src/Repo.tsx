import repos from "./repo.json";
import { useState } from "react";

type RepoProps = {
  idx: number;
};

export default function Repo({ idx }: RepoProps) {
  const [moreDesc, setMoreDesc] = useState("");

  const handleReadMore = () => {
    if (moreDesc) {
      return (
        <>
          <p className="text-gray-300">{moreDesc}</p>
          <div className="flex justify-end">
            <button className="hover:underline" onClick={() => setMoreDesc("")}>
              read less
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="flex justify-end">
            <button
              className="hover:underline"
              onClick={() => setMoreDesc(repos[idx].more)}
            >
              read more
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <div className="mb-4 sm:flex sm:flex-row">
      <div className="sm:basis-[175px]">
        <p className="whitespace-nowrap">{repos[idx].date}</p>
      </div>
      <div className="sm:basis-[400px]">
        <a
          href={repos[idx].url}
          target="_blank"
          className="flex items-center hover:underline"
        >
          <h3 className="text-white text-lg mr-2">{repos[idx].name}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
        <p className="text-gray-300">{repos[idx].description}</p>
        {handleReadMore()}
        <ul>
          {repos[idx].language.map((lang, i) => (
            <li key={`${idx}-${i}`} className="inline-block">
              {i > 0 && <span className="mr-1 ml-1">&#x2022;</span>}
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
