import Image from "next/image";

export default function Page() {
  return (
    <div className="flex border-b border-gray-200">
      <div className="flex">
        <Image
          src="https://a.espncdn.com/i/teamlogos/ncaa/500/66.png"
          alt="Iowa State Clones"
          width={20}
          height={20}
        />
        <p className="font-bold ml-2">Iowa State Clones</p>
      </div>
      <div className="flex text-right">
        <p className="text-gray-700">87-24</p>
        <p className="font-bold text-green-700 ml-2">W</p>
      </div>
    </div>
  );
}
