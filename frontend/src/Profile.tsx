export default function Profile() {
  return (
    <div className="flex items-center">
      <img
        src="./img/kota.jpg"
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
