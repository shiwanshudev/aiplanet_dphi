"use client";

import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import type { Dayjs } from "dayjs";
import Image from "next/image";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<null | Dayjs>(null);
  const DateImg = () => (
    <Image
      src={"/uil_calender.svg"}
      alt="calender icon"
      width={25}
      height={25}
    />
  );
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
              <div className="mt-5">
                <DateTimePicker
                  label="Select start date"
                  value={selectedDate}
                  onChange={(d) => setSelectedDate(d)}
                  slotProps={{ textField: { size: "small" } }}
                  slots={{
                    openPickerIcon: DateImg,
                  }}
                  className="lg:w-1/3 w-full"
                />
              </div>
            </div>
          </form>
        </div>
      </main>{" "}
    </LocalizationProvider>
  );
}
