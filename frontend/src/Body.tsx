import Profile from "./Profile";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Work from "./Work";

export default function Body() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[600px] min-w-[350px] p-4 flex flex-col gap-4">
        <Profile />
        <About />
        <Work />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}
