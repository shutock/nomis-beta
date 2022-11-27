import Image from "next/image";

export default function Menu() {
  return (
    <div className="menu">
      <Image src={"/banners/scoreCircle.svg"} fill />
      <div className="row button">Mint Your Score</div>
    </div>
  );
}
