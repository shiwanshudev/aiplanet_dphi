import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

interface ChallengePageProps {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: "Dphi | Data Sprint 72 - Butterfly Identification",
  description: "Accelerate Innovation with Global AI Challenges",
};

export default function ChallengePage({ params }: ChallengePageProps) {
  const { id } = params;
  // fetch the page with id

  return (
    <main>
      <section className="bg-brand-blue">
        <div className="container mx-auto py-24 px-5 lg:px-0">
          <div className="bg-brand-yellow font-semibold rounded-md px-2 flex py-1 max-w-lg items-center justify-center">
            <Image
              src={"/clock.svg"}
              width={14}
              height={14}
              alt="time"
              className="mr-2"
            />
            <p>{`Starts on 17th Jun'22 09:00 PM (India Standard Time)`}</p>
          </div>
          <h1 className="font-semibold text-4xl text-white pt-6 pb-8">
            Data Sprint 72 - Butterfly Identification
          </h1>
          <p className="text-white font-medium pb-6">
            Identify the class to which each butterfly belongs to
          </p>
          <button
            className="bg-brand-lightgray flex items-center justify-center px-3 py-2 font-semibold rounded-md text-sm"
            disabled
          >
            <Image
              width={18}
              height={18}
              className="mr-2"
              src={"/skill-level.svg"}
              alt="skill level images"
            />
            Easy
          </button>
        </div>
      </section>
      <nav className="bg-white shadow-md">
        <div className="container h-16 mx-auto flex items-center justify-between px-5 lg:px-0">
          <div className="h-full border-b-brand-green border-b-4 border-solid flex items-center justify-center px-5 max-w-24 font-bold">
            Overview
          </div>
          <div>
            <Link
              href={`/admin/edit/${id}`}
              className="px-8 py-2 bg-brand-green rounded-md text-white mr-3"
            >
              Edit
            </Link>
            <Link
              href={`/admin/delete/${id}`}
              className="px-6 py-2 border-solid border-brand-red border rounded-md text-brand-red"
            >
              Delete
            </Link>
          </div>
        </div>
      </nav>
      <section className="container mx-auto pt-12 font-poppins leading-7 text-brand-slategray-100 px-5 lg:px-0">
        <p className="pb-5">
          {`Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera. The word "Lepidoptera" means
          "scaly wings" in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales
          overlapping in rows.`}
        </p>

        <p className="pb-5">
          {`An agency of the Governmental Wildlife Conservation is planning to
          implement an automated system based on computer vision so that it can
          identify butterflies based on captured images. As a consultant for
          this project, you are responsible for developing an efficient model.`}
        </p>

        <p className="pb-5">
          {` Your Task is to build an Image Classification Model using CNN that
          classifies to which class of weather each image belongs to.`}
        </p>
      </section>
    </main>
  );
}
