import DatePicker from "@/components/date-picker";
import SelectLevel from "@/components/select-level";
import TextField from "@mui/material/TextField";
import Image from "next/image";

export default function Home() {
  return (
    <main className="lg:pb-28 pb-48">
      <div className="text-2xl font-bold py-9 bg-brand-lightgray">
        <div className="container lg:mx-auto px-5">Challenge Details</div>
      </div>
      <div className="container mx-auto">
        <form className="lg:mx-0 px-5">
          <div className="pt-9">
            <label className="block">Challenge Name</label>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              className="w-full mt-5 lg:w-1/3"
            />
          </div>
          <div className="pt-9">
            <label className="block">Start Date</label>
            <DatePicker
              label={"Select start date"}
              className={"w-full mt-5 lg:w-1/3"}
            />
          </div>
          <div className="pt-9">
            <label className="block">End Date</label>
            <DatePicker
              label={"Select end date"}
              className={"w-full mt-5 lg:w-1/3"}
            />
          </div>
          <div className="pt-9">
            <label htmlFor="description">Description</label>
            <textarea
              className="mt-5 block lg:h-72 w-full h-28 border-brand-gray border border-solid rounded-md lg:w-2/3"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="pt-9">
            <label>Upload</label>
            <button className="mt-5 flex items-center justify-center text-brand-gray-200 bg-brand-lightgray-100 py-3 px-16 text-lg rounded-md border border-solid border-brand-gray hover:bg-brand-gray-100 duration-100">
              Upload
              <Image
                src={"/bxs_cloud-upload.svg"}
                width={25}
                height={25}
                alt="upload button image"
                className="ml-2"
              />
            </button>
          </div>
          <div className="pt-9">
            <p>Level Type</p>
            <SelectLevel className="mt-5 w-56" />
          </div>
          <button className="mt-14 bg-brand-green px-20 text-lg rounded-md py-3 text-white">
            Create
          </button>
        </form>
      </div>
    </main>
  );
}
