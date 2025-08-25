type Contact = { title: string; link: string; mail?: boolean };
const contacts: Contact[] = [
  { title: "School email", link: "kotayama@seas.upenn.edu", mail: true },
  { title: "Personal email", link: "ykomako4.9@gmail.com", mail: true },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/kota-yamamoto/" },
  { title: "GitHub", link: "https://github.com/kotayam" },
];

export default function Contacts() {
  return (
    <div className="mt-5">
      <h2 id="contacts" className="text-white text-xl mb-1">
        Contacts
      </h2>
      <div className="flex-col gap-1">
        {contacts.map((c) => (
          <div className="flex items-start gap-1">
            <span>•</span>
            <p>
              {c.title}:{" "}
              <a
                href={c.mail ? `mailto:${c.link}` : c.link}
                target="_blank"
                className="hover:underline"
              >
                {c.link}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
