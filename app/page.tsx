import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="text-2xl font-bold py-9 bg-brand-heading">
        <div className="container mx-auto">Challenge Details</div>
      </div>
      <div className="container mx-auto">
        <form>
          <div className="pt-9">
            <label>Challenge Name</label>
            <input
              type="text"
              className="border border-solid border-brand-border outline-none block mt-5 rounded-md py-1 lg:w-1/3 w-full"
            />
          </div>
          <div className="pt-9">
            <label>Start Date</label>
            <input
              type="date"
              className="border border-solid border-brand-border outline-none block mt-5 rounded-md py-1 lg:w-1/3 w-full"
              placeholder="Add start date"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
