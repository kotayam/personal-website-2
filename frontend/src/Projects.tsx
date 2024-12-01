import Repo from "./Repo";
import repos from "./repo.json";

export default function Projects() {

    return (
        <div className="mt-5">
            <h2 id="projects" className="text-white text-xl mb-1">Personal Projects</h2>
            {repos.map((_, idx) => <Repo key={idx} idx={idx}/>)}
        </div>
    )
}