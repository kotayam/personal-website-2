import repos from "./repo.json";

type RepoProps = {
  idx: number;
};

export default function Repo({ idx }: RepoProps) {
  return (
    <div className="mb-2 sm:flex sm:flex-row">
      <div className="sm:basis-[175px]">
        <p className="whitespace-nowrap">{repos[idx].date}</p>
      </div>
      <div className="sm:basis-[400px]">
        <a href={repos[idx].url} target="_blank" className="flex items-center hover:underline">
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
        <p className=" text-gray-300">{repos[idx].description}</p>
        <ul>
          {repos[idx].language.map((lang, i) => {
            if (i > 0) {
              return (
                <>
                  <li key={i} className="inline-block">
                    <span className="mr-1 ml-1">&#x2022;</span>
                    {lang}
                  </li>
                </>
              );
            } else {
              return (
                <li key={i} className="inline-block">
                  {lang}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
