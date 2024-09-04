import DatePicker from "@/components/date-picker";
import SelectLevel from "@/components/select-level";
import Input from "@/components/text-input";
import Image from "next/image";

export default function Create() {
  const createChallenge = async (formData: FormData) => {
    "use server";
    //  Make your API calls here to create the challenge
    console.log(formData);
  };
  return (
    <main className="lg:pb-28 pb-48">
      <div className="text-2xl font-bold py-9 bg-brand-lightgray">
        <div className="container lg:mx-auto px-5">Challenge Details</div>
      </div>
      <div className="container mx-auto">
        <form className="lg:mx-0 px-5" action={createChallenge}>
          <div className="pt-9">
            <label className="block">Challenge Name</label>
            <Input className="w-full mt-5 lg:w-1/3" name="challenge" />
          </div>
          <div className="pt-9">
            <label className="block">Start Date</label>
            <DatePicker
              label={"Select start date"}
              className={"w-full mt-5 lg:w-1/3"}
              name="start"
            />
          </div>
          <div className="pt-9">
            <label className="block">End Date</label>
            <DatePicker
              label={"Select end date"}
              className={"w-full mt-5 lg:w-1/3"}
              name="end"
            />
          </div>
          <div className="pt-9">
            <label htmlFor="description">Description</label>
            <textarea
              className="mt-5 block lg:h-72 w-full h-28 border-brand-gray border border-solid rounded-md lg:w-2/3 p-5"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="pt-9">
            <p>Upload</p>
            <label className="relative w-56 mt-5 flex items-center justify-center text-brand-gray-200 bg-brand-lightgray-100 py-3 px-16 text-lg rounded-md border border-solid border-brand-gray hover:bg-brand-gray-100 duration-100 cursor-pointer">
              Upload
              <Image
                src={"/bxs_cloud-upload.svg"}
                width={25}
                height={25}
                alt="upload button image"
                className="ml-2"
              />
              <input
                type="file"
                className="opacity-0 absolute inset-0 cursor-pointer"
                name="image"
              />
            </label>
          </div>
          <div className="pt-9">
            <p>Level Type</p>
            <SelectLevel className="mt-5 w-56" name="level" />
          </div>
          <button className="mt-14 bg-brand-green px-20 text-lg rounded-md py-3 text-white">
            Create
          </button>
        </form>
      </div>
    </main>
  );
}
