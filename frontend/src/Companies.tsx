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
              className="hover:underline text-white"
            >
              {comp.name}
            </a>
            <p>Project: {comp.project}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
