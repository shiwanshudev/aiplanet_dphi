import Image from "next/image";
import Link from "next/link";

export interface ChallengeCardProps {
  imgSrc: string;
  name: string;
  status: string;
  start: Date;
  end: Date;
  id: string;
}

export default function ChallengeCard({
  imgSrc,
  name,
  status,
  start,
  end,
  id,
}: ChallengeCardProps) {
  let statusClassColor = "";
  if (status === "ACTIVE") statusClassColor = "bg-brand-green";
  if (status === "PAST") statusClassColor = "bg-brand-red";
  if (status === "UPCOMING") statusClassColor = "bg-brand-yellow";

  return (
    <div className="bg-white flex flex-col items-center justify-center w-[354px] rounded-lg">
      <div className="w-full h-44 relative">
        <Image
          src={imgSrc}
          fill
          alt="challenge image"
          className="object-cover rounded-t-lg"
        />
      </div>
      <p
        className={`${statusClassColor} text-xs bg-opacity-25 px-2 py-1 rounded-lg my-6`}
      >
        {status}
      </p>
      <p className="font-semibold text-base px-14 leading-7 mb-6">{name}</p>
      <p className="text-sm pb-2">Starts in</p>{" "}
      <div className="flex justify-center">
        <div>
          <div className="text-lg font-semibold">12</div>
          <div className="text-[10px]">Days</div>
        </div>
        <span className="text-lg font-semibold px-3">:</span>
        <div>
          <div className="text-lg font-semibold">24</div>
          <div className="text-[10px]">Hours</div>
        </div>
        <span className="text-lg font-semibold px-3">:</span>
        <div>
          <div className="text-lg font-semibold">30</div>
          <div className="text-[10px]">Mins</div>
        </div>
      </div>
      <Link
        href={`/${id}`}
        className="bg-brand-green py-2 px-6 flex items-center justify-center rounded-lg text-white text-xs font-semibold mt-8 mb-7 flex-wrap"
      >
        <Image
          src={"/circle-tick.svg"}
          height={14}
          width={14}
          alt="participate button image"
          className="mr-2"
        />{" "}
        Participate Now
      </Link>
    </div>
  );
}
