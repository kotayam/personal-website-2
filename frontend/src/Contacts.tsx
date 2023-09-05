export default function Contancts() {
  return (
    <div className="mt-5">
      <h2 id="contacts" className="text-white text-lg mb-1">
        Contacts
      </h2>
      <ul>
        <li>
          <p>
            Email: <a href="mailto:kotayama@wharton.upenn.edu" className="hover:underline">kotayama@wharton.upenn.edu</a>
          </p>
        </li>
        <li>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/kota-yamamoto/" target="_blank" className="hover:underline">https://www.linkedin.com/in/kota-yamamoto/</a>
          </p>
        </li>
        <li>
          <p>
            GitHub: <a href="https://github.com/kotayam" target="_blank" className="hover:underline">https://github.com/kotayam</a>
          </p>
        </li>
      </ul>
    </div>
  );
}
