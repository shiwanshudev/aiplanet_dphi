"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import type { Dayjs } from "dayjs";
import Image from "next/image";
import type { DateTimePickerProps as MuiDateTimePickerProps } from "@mui/x-date-pickers";

interface DatePickerProps extends MuiDateTimePickerProps<Dayjs> {
  label: string;
  className: string;
}

export default function DatePicker({
  label,
  className,
  ...rest
}: DatePickerProps) {
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
      <DateTimePicker
        label={label}
        value={selectedDate}
        onChange={(d) => setSelectedDate(d)}
        slotProps={{ textField: { size: "small" } }}
        slots={{
          openPickerIcon: DateImg,
        }}
        className={className}
        {...rest}
      />
    </LocalizationProvider>
  );
}
