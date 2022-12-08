import Image from "next/image";

type RowTypes ={
  image: string,
  name: string,
  score: string,
  win: boolean
}

function Row(props: RowTypes) {
  return (
    <div className="flex border-b border-gray-200 justify-between px-4 py-2">
      <div className="flex">
        <Image src={props.image} alt={props.name} width={20} height={20} />
        <p className="font-semibold ml-4">{props.name}</p>
      </div>
      <div className="flex text-right">
        <p className="text-gray-700">{props.score}</p>
        {props.win ? (
          <p className="font-bold text-green-700 ml-2">W</p>
        ) : (
          <p className="font-bold text-red-700 ml-2">L</p>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Row
        win
        image="https://a.espncdn.com/i/teamlogos/ncaa/500/66.png"
        name="Iowa State Clones"
        score="87-25"
      />
      
      <Row
        win={false}
        image="https://a.espncdn.com/i/teamlogos/ncaa/500/66.png"
        name="Iowa State Clones"
        score="100-105"
      />
      <Row
        win={false}
        image="https://a.espncdn.com/i/teamlogos/ncaa/500/66.png"
        name="Toronto"
        score="70-95"
      />
      <Row
        win
        image="https://a.espncdn.com/i/teamlogos/ncaa/500/66.png"
        name="Iowa Hawkeyes"
        score="41-24"
      />
    </>
  );
}
