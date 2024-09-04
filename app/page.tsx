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
      <section className="container mx-auto pb-32">
        <h2 className="font-semibold text-3xl pt-24 pb-20 text-center">
          Why Participate in{" "}
          <span className="text-brand-green">AI Challenges?</span>
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-5 lg:gap-10 lg:flex-row flex-col">
          <div className="bg-brand-lightgray p-10 rounded-lg max-w-xl">
            <Image
              src={"/skills.svg"}
              alt="participate image"
              width={40}
              height={40}
            />
            <h3 className="text-2xl font-semibold py-2">Prove your skills</h3>
            <p className="text-brand-slategray-100 text-base">
              Gain substantial experience by solving real-world problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
          <div className="bg-brand-lightgray p-10 rounded-lg max-w-xl">
            <Image
              src={"/community.svg"}
              alt="participate image"
              width={40}
              height={40}
            />
            <h3 className="text-2xl font-semibold py-2">
              Learn from community
            </h3>
            <p className="text-brand-slategray-100 text-base">
              One can look and analyze the solutions submitted by the other Data
              Scientists in the community and learn from them.
            </p>
          </div>
          <div className="bg-brand-lightgray p-10 rounded-lg max-w-xl">
            <Image
              src={"/challenge.svg"}
              alt="participate image"
              width={40}
              height={40}
            />
            <h3 className="text-2xl font-semibold py-2">Challenge yourself</h3>
            <p className="text-brand-slategray-100 text-base">
              There is nothing for you to lose by participating in a challenge.
              You can fail safe, learn out of the entire experience and bounce
              back harder.
            </p>
          </div>
          <div className="bg-brand-lightgray p-10 rounded-lg max-w-xl">
            <Image
              src={"/recognition.svg"}
              alt="participate image"
              width={40}
              height={40}
            />
            <h3 className="text-2xl font-semibold py-2">Earn recognition</h3>
            <p className="text-brand-slategray-100 text-base">
              You will stand out from the crowd if you do well in AI challenges,
              it not only helps you shine in the community but also earns
              rewards.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
