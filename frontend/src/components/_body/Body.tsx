import Profile from "./Profile";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";

export default function Body() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[600px] min-w-[350px] p-4">
        <Profile />
        <About />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}
