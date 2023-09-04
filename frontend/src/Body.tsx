import Profile from "./Profile";
import About from "./About";
import Projects from "./Projects";
import Links from "./Links";

export default function Body() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[500px] min-w-[350px] p-4">
        <Profile/>
        <About/>
        <Projects/>
        <Links/>
      </div>
    </div>
  );
}
