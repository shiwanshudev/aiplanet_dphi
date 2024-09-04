import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-brand-blue">
        <div className="container mx-auto px-5 lg:px-0 font-poppins text-white flex items-center justify-around flex-col lg:flex-row pt-32 pb-24 text-center lg:text-left">
          <div className="lg:w-[705px]">
            <h1 className=" font-semibold text-3xl lg:text-5xl border-solid border-brand-yellow lg:border-l-8 lg:pl-14">
              Accelerate Innovation with Global AI Challenges
            </h1>
            <p className="pt-9 font-medium leading-7 lg:pl-14">
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>
            <Link
              href={"/admin/create"}
              className="bg-white text-brand-blue px-5 py-3 inline-block rounded-md font-semibold lg:ml-14 mt-9 hover:bg-brand-lightgray duration-100"
            >
              Create Challenge
            </Link>
          </div>
          <div className="h-72 w-72 relative">
            <Image className="" src={"/rocket.svg"} fill alt="rocket" />
          </div>
        </div>
        <div className="bg-brand-blue-100 text-white">
          <div className="container flex lg:items-center justify-center mx-auto px-5 lg:px-0 py-20 lg:flex-row flex-col">
            <div className="flex items-center lg:justify-center lg:py-0 lg:pl-0 py-2 pl-5 lg:mx-20">
              <Image src={"/ai.svg"} height={55} width={55} alt="ai" />
              <div className="pl-3 border-solid lg:border-r lg:pr-16">
                <p className="font-bold text-2xl">100+</p>
                <p className="font-medium">AI model submissions</p>
              </div>
            </div>
            <div className="flex items-center lg:justify-center lg:py-0 lg:pl-0 py-2 pl-5 lg:mx-20">
              <Image src={"/ai.svg"} height={55} width={55} alt="ai" />
              <div className="pl-3 border-solid lg:border-r lg:pr-16">
                <p className="font-bold text-2xl">50K+</p>
                <p className="font-medium">Data Scientists</p>
              </div>
            </div>
            <div className="flex items-center lg:justify-center lg:py-0 lg:pl-0 py-2 pl-5 lg:mx-20">
              <Image src={"/ai.svg"} height={55} width={55} alt="ai" />
              <div className="pl-3">
                <p className="font-bold text-2xl lg:pr-16">100+</p>
                <p className="font-medium">AI Challenges hosted</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
