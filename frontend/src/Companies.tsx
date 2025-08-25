import companies from "./companies.json";

export default function Companies() {
  return (
    <div>
      <div className="flex justify-start items-center gap-6">
        {companies.map((comp) => (
          <div
            key={comp.name}
            className="flex-col flex justify-center items-center gap-2"
          >
            <img
              className="w-20 h-20 object-contain"
              style={{
                backgroundColor: comp.background,
                borderRadius: "50%",
              }}
              src={`/img/${comp.img}.png`}
              alt={`image of ${comp.name}`}
            />
            <a
              href={comp.link}
              target="_blank"
              className="hover:underline text-white text-center"
            >
              {comp.name}
            </a>
            {comp.project && (
              <p className="text-center">Project: {comp.project}</p>
            )}
            {comp.position && <p className="text-center">{comp.position}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
