import repos from "./repo.json";

type RepoProps = {
  idx: number;
};

export default function Repo({ idx }: RepoProps) {
  return (
    <div className="flex justify-between">
      <p className="">{repos[idx].date}</p>
      <div>
        <h3 className="text-white text-lg">{repos[idx].name}</h3>
        <p>{repos[idx].description}</p>
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
