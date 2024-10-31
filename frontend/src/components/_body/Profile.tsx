import kotaUrl from "./img/kota.jpg";

export default function Profile() {
  return (
    <div id="top" className="flex items-center">
      <img
        src={kotaUrl}
        alt="Kota Profile Pic"
        className="rounded-full h-24 mr-5"
      />
      <div>
        <h1 className="text-2xl text-white">Kota Yamamoto</h1>
        <p className="text-xl">Full-Stack Developer</p>
      </div>
    </div>
  );
}
